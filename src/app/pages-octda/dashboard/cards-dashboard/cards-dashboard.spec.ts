import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDashboard } from './cards-dashboard';

describe('CardsDashboard', () => {
  let component: CardsDashboard;
  let fixture: ComponentFixture<CardsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
