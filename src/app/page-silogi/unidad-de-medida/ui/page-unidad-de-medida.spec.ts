import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnidadDeMedida } from './page-unidad-de-medida';

describe('PageUnidadDeMedida', () => {
  let component: PageUnidadDeMedida;
  let fixture: ComponentFixture<PageUnidadDeMedida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageUnidadDeMedida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUnidadDeMedida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
