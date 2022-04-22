import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import CustomValidators from './validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  public form: FormGroup;
  public loading: boolean = false;

  public get firstNameInvalid(): boolean | undefined {
    return this._isFieldInvalid('firstName');
  }

  public get lastNameInvalid(): boolean | undefined {
    return this._isFieldInvalid('lastName');
  }

  public get email(): AbstractControl | null {
    return this.form.get('email');
  }

  public get emailInvalid(): boolean | undefined {
    return this._isFieldInvalid('email');
  }

  public get password(): AbstractControl | null {
    return this.form.get('password');
  }

  public get passwordInvalid(): boolean | undefined {
    return this._isFieldInvalid('password') &&  this.form.errors?.['passwordIncludesName'];
  }

  public get confirmPassword(): AbstractControl | null {
    return this.form.get('confirmPassword');
  }

  public get confirmPasswordInvalid(): boolean | undefined {
    const formErrors = this.form.errors;

    return this.confirmPassword?.touched && (formErrors?.['passwordMatch'] || formErrors?.['passwordConfirmationRequired']);
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', CustomValidators.passwordValidator],
      confirmPassword: ['']
    },
      {
        validators: Validators.compose([
          CustomValidators.passwordMatchValidator,
          CustomValidators.passwordIncludesNameValidator
        ])
      });
  }

  private _isFieldInvalid(controlName: string): boolean | undefined {
    return this.form.get(controlName)?.touched && this.form.get(controlName)?.invalid;
  }

  public _disableForm(): void {
    Object.keys(this.form.controls).forEach(ctrl => {
      this.form.get(ctrl)?.disable();
    });
  }

  public registerUser(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this._disableForm();
    this.loading = true;

    const userPayload: User = {
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value
    };

    this.authService.registerUser(userPayload).subscribe(() => {
      alert('User successfully created! Now you are gonna be redirected to the home page');
      this.router.navigate(['']);
    });
  }
}
