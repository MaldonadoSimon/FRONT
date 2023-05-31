import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDocumentComponent } from './category-document.component';

describe('CategoryDocumentComponent', () => {
  let component: CategoryDocumentComponent;
  let fixture: ComponentFixture<CategoryDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
