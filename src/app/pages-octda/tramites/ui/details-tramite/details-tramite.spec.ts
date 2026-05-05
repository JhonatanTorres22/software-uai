import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTramite } from './details-tramite';

describe('DetailsTramite', () => {
  let component: DetailsTramite;
  let fixture: ComponentFixture<DetailsTramite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTramite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTramite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
