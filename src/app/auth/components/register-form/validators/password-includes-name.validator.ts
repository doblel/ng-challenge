import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordIncludesNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passwordControl = control.get('password');
  const firstNameControl = control.get('firstName');
  const lastNameControl = control.get('lastName');

  const firstName = firstNameControl && firstNameControl.value.toLowerCase();
  const lastName = lastNameControl && lastNameControl.value.toLowerCase();
  const password = passwordControl && passwordControl.value;

  const includesFirstName = password.toLowerCase().includes(firstName);
  const includesLastName = password.toLowerCase().includes(lastName);

  return (includesFirstName || includesLastName) ? { passwordIncludesName: true } : null;
}