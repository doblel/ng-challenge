import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control && control.value;

  if (!password) {
    return {
      required: true,
      minLength: true,
      lowerCaseRequired: true,
      upperCaseRequired: true
    };
  }

  const minLength = password.length < 8;
  const hasUpperCase = /[A-Z]+/.test(password);
  const hasLowerCase = /[a-z]+/.test(password);

  const invalidPassword = minLength
    || !hasUpperCase
    || !hasLowerCase;

  return invalidPassword
    ? {
      minLength,
      lowerCaseRequired: !hasLowerCase,
      upperCaseRequired: !hasUpperCase
    }
    : null;
}