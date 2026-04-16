import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserName } from './search-user-name';

describe('SearchUserName', () => {
  let component: SearchUserName;
  let fixture: ComponentFixture<SearchUserName>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchUserName]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUserName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
