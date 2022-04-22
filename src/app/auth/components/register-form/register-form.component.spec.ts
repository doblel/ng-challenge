import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { InputFieldComponent } from 'src/app/shared/input-field/input-field.component';
import { InputHintComponent } from 'src/app/shared/input-hint/input-hint.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from '../../services/auth.service';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let authService = jasmine.createSpyObj<AuthService>('AuthService', ['registerUser']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [
        RegisterFormComponent,
        InputFieldComponent,
        InputHintComponent
      ],
      providers: [{ provide: AuthService, useValue: authService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    authService.registerUser.calls.reset();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form with all its elements', () => {
    const dElement = fixture.debugElement;

    expect(dElement.nativeElement.querySelector('form')).toBeDefined();
    expect(dElement.nativeElement.querySelector('button')).toBeDefined();
    expect(dElement.queryAll(By.css('input')).length).toEqual(5);
  });

  it('should be invalid once mounted', () => {
    expect(component.form.invalid).toBeTrue();
  });

  it('submits the form successfully', () => {
    spyOn(component, '_disableForm');

    component.form.get('firstName')?.setValue('Jon');
    component.form.get('lastName')?.setValue('Snow');
    component.form.get('email')?.setValue('jonsnow@blackcastle.got');
    component.form.get('password')?.setValue('NicePassword');
    component.form.get('confirmPassword')?.setValue('NicePassword');

    fixture.detectChanges();

    expect(component.form.valid).toBeTrue();

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', {});

    expect(component._disableForm).toHaveBeenCalled();
    expect(authService.registerUser).toHaveBeenCalled();

  });

  it('does not submit an invalid form', () => {
    spyOn(component, '_disableForm');

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', {});

    expect(component.form.invalid).toBeTrue();

    expect(component._disableForm).not.toHaveBeenCalled();
    expect(authService.registerUser).not.toHaveBeenCalled();
  });

  it('disable form controls calling _disableForm()', () => {
    component._disableForm();

    fixture.detectChanges();

    expect(component.form.get('firstName')?.disabled).toBeTrue();
    expect(component.form.get('lastName')?.disabled).toBeTrue();
    expect(component.form.get('email')?.disabled).toBeTrue();
    expect(component.form.get('password')?.disabled).toBeTrue();
  });
});
