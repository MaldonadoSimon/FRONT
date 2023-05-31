import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateContacComponent } from './validate-contac.component';

describe('ValidateContacComponent', () => {
  let component: ValidateContacComponent;
  let fixture: ComponentFixture<ValidateContacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateContacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateContacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
