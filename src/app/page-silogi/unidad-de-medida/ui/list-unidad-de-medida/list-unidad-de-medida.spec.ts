import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnidadDeMedida } from './list-unidad-de-medida';

describe('ListUnidadDeMedida', () => {
  let component: ListUnidadDeMedida;
  let fixture: ComponentFixture<ListUnidadDeMedida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUnidadDeMedida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUnidadDeMedida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
