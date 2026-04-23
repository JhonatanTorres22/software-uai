import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoria } from './list-categoria';

describe('ListCategoria', () => {
  let component: ListCategoria;
  let fixture: ComponentFixture<ListCategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
