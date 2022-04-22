import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passwordControl = control.get('password');
  const passwordMatchControl = control.get('confirmPassword');

  if (!passwordMatchControl || !passwordMatchControl.value) {
    return {
      passwordConfirmationRequired: true
    }
  }

  return passwordControl
    && passwordMatchControl
    && passwordControl.value !== passwordMatchControl.value
    ? { passwordMatch: true }
    : null;
}