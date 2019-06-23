import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tenant } from '@hoepel.app/types';

@Component({
  selector: 'hoepel-tenant-contact-dumb',
  templateUrl: './tenant-contact-dumb.component.html',
  styleUrls: ['./tenant-contact-dumb.component.css']
})
export class TenantContactDumbComponent implements OnChanges {
  @Input() tenant: Tenant;
  @Output() updated = new EventEmitter<Tenant>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      streetAndNumber: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],

      contactPersonName: ['', Validators.required],
      contactPersonPhone: [''],
      contactPersonEmail: ['', Validators.email],

      description: ['']
    });
  }

  ngOnChanges(): void {
    if (this.tenant) {
      this.form.patchValue({
        name: this.tenant.name,
        email: this.tenant.email || '',
        streetAndNumber: (this.tenant.address || {}).streetAndNumber || '',
        zipCode: this.tenant.address.zipCode || '',
        city: this.tenant.address.city || '',
        contactPersonName: this.tenant.contactPerson.name || '',
        contactPersonPhone: this.tenant.contactPerson.phone || '',
        contactPersonEmail: this.tenant.contactPerson.email || '',
        description: this.tenant.description || ''
      });
    }
  }

  submit(formValue: any): void {
    this.updated.emit(
      Object.assign(this.tenant, {
        name: formValue.name || '',
        email: formValue.email || null,
        address: {
          streetAndNumber: formValue.streetAndNumber || null,
          zipCode: formValue.zipCode || null,
          city: formValue.city || null
        },
        contactPerson: {
          name: formValue.contactPersonName || null,
          phone: formValue.contactPersonPhone || null,
          email: formValue.contactPersonEmail || null
        },
        description: formValue.description || ''
      })
    );
  }
}
