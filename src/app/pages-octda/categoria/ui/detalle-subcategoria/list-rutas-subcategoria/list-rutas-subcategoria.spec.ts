import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRutasSubcategoria } from './list-rutas-subcategoria';

describe('ListRutasSubcategoria', () => {
  let component: ListRutasSubcategoria;
  let fixture: ComponentFixture<ListRutasSubcategoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRutasSubcategoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRutasSubcategoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
