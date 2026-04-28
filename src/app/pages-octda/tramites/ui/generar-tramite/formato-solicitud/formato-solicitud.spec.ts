import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatoSolicitud } from './formato-solicitud';

describe('FormatoSolicitud', () => {
  let component: FormatoSolicitud;
  let fixture: ComponentFixture<FormatoSolicitud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormatoSolicitud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormatoSolicitud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
