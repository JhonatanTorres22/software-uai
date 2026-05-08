import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRutasSubcategoria } from './add-edit-rutas-subcategoria';

describe('AddEditRutasSubcategoria', () => {
  let component: AddEditRutasSubcategoria;
  let fixture: ComponentFixture<AddEditRutasSubcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditRutasSubcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRutasSubcategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
