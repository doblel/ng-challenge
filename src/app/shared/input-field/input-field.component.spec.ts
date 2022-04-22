import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputHintComponent } from '../input-hint/input-hint.component';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputFieldComponent, InputHintComponent],
      imports: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set attribute properties based on @Input() properties', () => {
    component.type = 'password';
    component.name = 'passwordField';
    component.inputId = 'passwordId';
    component.label = 'Password';
    component.disabled = true;

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const label = compiled.querySelector('label');
    const input = compiled.querySelector('input');

    expect(input.disabled).toBeTrue();
    expect(input.type).toEqual('password');
    expect(input.name).toEqual('passwordField');
    expect(input.id).toEqual('passwordId');
    expect(label.textContent).toEqual('Password');
  });

  it('should show error hint when field is invalid', () => {
    component.invalid = true;
    component.errorMessage = 'This field is required.';

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const errorHint = compiled.querySelector('app-input-hint > p');
    
    expect(errorHint).toBeTruthy();
    expect(errorHint.classList).toContain('hint--error');
    expect(errorHint.textContent).toBe('This field is required.');
  });
});
