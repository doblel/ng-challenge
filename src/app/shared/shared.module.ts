import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputHintComponent } from './input-hint/input-hint.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    InputHintComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputFieldComponent,
    InputHintComponent
  ]
})
export class SharedModule { }
