import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubcategoria } from './add-edit-subcategoria';

describe('AddEditSubcategoria', () => {
  let component: AddEditSubcategoria;
  let fixture: ComponentFixture<AddEditSubcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditSubcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSubcategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
