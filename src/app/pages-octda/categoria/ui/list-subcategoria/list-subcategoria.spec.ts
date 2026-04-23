import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubcategoria } from './list-subcategoria';

describe('ListSubcategoria', () => {
  let component: ListSubcategoria;
  let fixture: ComponentFixture<ListSubcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSubcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubcategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
