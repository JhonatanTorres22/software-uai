import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditConfiguracionSubcategoria } from './add-edit-configuracion-subcategoria';

describe('AddEditConfiguracionSubcategoria', () => {
  let component: AddEditConfiguracionSubcategoria;
  let fixture: ComponentFixture<AddEditConfiguracionSubcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditConfiguracionSubcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditConfiguracionSubcategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
