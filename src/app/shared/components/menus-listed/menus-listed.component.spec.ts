import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusListedComponent } from './menus-listed.component';

describe('MenusListedComponent', () => {
  let component: MenusListedComponent;
  let fixture: ComponentFixture<MenusListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusListedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
