import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantContactDumbComponent } from './tenant-contact-dumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Tenant } from '@hoepel.app/types';
import { DomSanitizer } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('TenantContactDumbComponent', () => {
  let component: TenantContactDumbComponent;
  let fixture: ComponentFixture<TenantContactDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantContactDumbComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule,
        FlexLayoutModule
      ]
    }).compileComponents();

    // Get MDI icons
    const iconRegistry = TestBed.get(MatIconRegistry);
    const sanitizer = TestBed.get(DomSanitizer);

    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl('https://unpkg.com/@mdi/angular-material@3.0.39/mdi.svg')
    );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantContactDumbComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should return input tenant when saving', () => {
    const tenant: Tenant = {
      name: 'Test Naam',
      email: 'test@test.com',
      address: {
        streetAndNumber: 'Straat 45',
        zipCode: '555',
        city: 'Stad'
      },
      contactPerson: {
        email: 'contact@test.be',
        name: 'Contact Naam'
      },
      description: ''
    };

    component.tenant = tenant;
    component.ngOnChanges(); // We have no host component, call ngOnChanges manually
    fixture.detectChanges();

    expect(component.form.valid).toBeTruthy();

    spyOn(component.updated, 'emit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(component.updated.emit).toHaveBeenCalledWith(tenant);
  });

  it('should keep existing properties on input tenant', () => {
    const tenant: Tenant = {
      name: 'Test Naam',
      email: 'test@test.com',
      address: {
        streetAndNumber: 'Straat 45',
        zipCode: '555',
        city: 'Stad'
      },
      contactPerson: {
        email: 'contact@test.be',
        name: 'Contact Naam'
      },
      description: '',
      logoSmallUrl: 'small logo url here',
      logoUrl: 'logo url here',
      id: 'tenant id here',
      privacyPolicyUrl: 'privacy policy url here'
    };

    component.tenant = tenant;
    component.ngOnChanges(); // We have no host component, call ngOnChanges manually
    fixture.detectChanges();

    expect(component.form.valid).toBeTruthy();

    spyOn(component.updated, 'emit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(component.updated.emit).toHaveBeenCalledWith(tenant);
  });
});
