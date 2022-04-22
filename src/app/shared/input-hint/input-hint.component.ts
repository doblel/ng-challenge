import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-hint',
  templateUrl: './input-hint.component.html',
  styleUrls: ['./input-hint.component.scss']
})
export class InputHintComponent {

  @Input() type: 'default' | 'error' | 'success' = 'default';
  
  constructor() { }

}
