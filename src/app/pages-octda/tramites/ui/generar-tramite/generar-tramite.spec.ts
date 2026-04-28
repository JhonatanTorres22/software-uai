import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarTramite } from './generar-tramite';

describe('GenerarTramite', () => {
  let component: GenerarTramite;
  let fixture: ComponentFixture<GenerarTramite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarTramite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarTramite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
