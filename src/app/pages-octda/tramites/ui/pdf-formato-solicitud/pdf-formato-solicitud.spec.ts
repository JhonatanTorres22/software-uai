import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFormatoSolicitud } from './pdf-formato-solicitud';

describe('PdfFormatoSolicitud', () => {
  let component: PdfFormatoSolicitud;
  let fixture: ComponentFixture<PdfFormatoSolicitud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfFormatoSolicitud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfFormatoSolicitud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
