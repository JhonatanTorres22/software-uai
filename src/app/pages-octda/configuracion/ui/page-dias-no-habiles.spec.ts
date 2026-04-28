import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDiasNoHabiles } from './page-dias-no-habiles';

describe('PageDiasNoHabiles', () => {
  let component: PageDiasNoHabiles;
  let fixture: ComponentFixture<PageDiasNoHabiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDiasNoHabiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDiasNoHabiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
