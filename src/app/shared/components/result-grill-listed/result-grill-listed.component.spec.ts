import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGrillListedComponent } from './result-grill-listed.component';

describe('ResultGrillListedComponent', () => {
  let component: ResultGrillListedComponent;
  let fixture: ComponentFixture<ResultGrillListedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultGrillListedComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGrillListedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
