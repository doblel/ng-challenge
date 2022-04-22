import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputHintComponent } from './input-hint.component';

describe('InputHintComponent', () => {
  let component: InputHintComponent;
  let fixture: ComponentFixture<InputHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add modifier class based on @Input() type', () => {
    component.type = 'error';
    fixture.detectChanges();

    let errorP = fixture.debugElement.query(By.css('.hint--error'));
    let successP = fixture.debugElement.query(By.css('.hint--success'));

    expect(errorP).toBeTruthy();
    expect(successP).toBeFalsy();

    component.type = 'success';
    fixture.detectChanges();

    errorP = fixture.debugElement.query(By.css('.hint--error'));
    successP = fixture.debugElement.query(By.css('.hint--success'));

    expect(errorP).toBeFalsy();
    expect(successP).toBeTruthy();
  });
});
