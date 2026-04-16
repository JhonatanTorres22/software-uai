import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMarca } from './page-marca';

describe('PageMarca', () => {
  let component: PageMarca;
  let fixture: ComponentFixture<PageMarca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMarca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMarca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
