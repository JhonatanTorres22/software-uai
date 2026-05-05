import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePdfFormatoSolicitud } from './generate-pdf-formato-solicitud';

describe('GeneratePdfFormatoSolicitud', () => {
  let component: GeneratePdfFormatoSolicitud;
  let fixture: ComponentFixture<GeneratePdfFormatoSolicitud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratePdfFormatoSolicitud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratePdfFormatoSolicitud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
