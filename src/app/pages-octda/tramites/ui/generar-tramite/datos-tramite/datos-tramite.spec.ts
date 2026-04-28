import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTramite } from './datos-tramite';

describe('DatosTramite', () => {
  let component: DatosTramite;
  let fixture: ComponentFixture<DatosTramite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosTramite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosTramite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
