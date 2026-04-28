import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiasNoHabiles } from './list-dias-no-habiles';

describe('ListDiasNoHabiles', () => {
  let component: ListDiasNoHabiles;
  let fixture: ComponentFixture<ListDiasNoHabiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDiasNoHabiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDiasNoHabiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
