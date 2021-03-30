import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormInputComponent } from './add-form-input.component';

describe('AddFormInputComponent', () => {
  let component: AddFormInputComponent;
  let fixture: ComponentFixture<AddFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
