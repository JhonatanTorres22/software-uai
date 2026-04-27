import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineTramite } from './time-line-tramite';

describe('TimeLineTramite', () => {
  let component: TimeLineTramite;
  let fixture: ComponentFixture<TimeLineTramite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeLineTramite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLineTramite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
