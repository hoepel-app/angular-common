import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHoepelCommonComponent } from './ng-hoepel-common.component';

describe('NgHoepelCommonComponent', () => {
  let component: NgHoepelCommonComponent;
  let fixture: ComponentFixture<NgHoepelCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgHoepelCommonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHoepelCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
