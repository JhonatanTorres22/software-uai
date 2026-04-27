import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTramites } from './page-tramites';

describe('PageTramites', () => {
  let component: PageTramites;
  let fixture: ComponentFixture<PageTramites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTramites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTramites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
