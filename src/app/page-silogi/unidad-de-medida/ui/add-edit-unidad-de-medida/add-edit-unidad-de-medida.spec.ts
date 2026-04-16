import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUnidadDeMedida } from './add-edit-unidad-de-medida';

describe('AddEditUnidadDeMedida', () => {
  let component: AddEditUnidadDeMedida;
  let fixture: ComponentFixture<AddEditUnidadDeMedida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditUnidadDeMedida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUnidadDeMedida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
