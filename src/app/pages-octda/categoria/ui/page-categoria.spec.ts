import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCategoria } from './page-categoria';

describe('PageCategoria', () => {
  let component: PageCategoria;
  let fixture: ComponentFixture<PageCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
