import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantContactExampleComponent } from './tenant-contact-example.component';

describe('TenantContactExampleComponent', () => {
  let component: TenantContactExampleComponent;
  let fixture: ComponentFixture<TenantContactExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantContactExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantContactExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
