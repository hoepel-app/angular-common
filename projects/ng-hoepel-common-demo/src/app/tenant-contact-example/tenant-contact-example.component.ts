import { Component, OnInit } from '@angular/core';
import { Tenant } from '@hoepel.app/types';

@Component({
  selector: 'app-tenant-contact-example',
  templateUrl: './tenant-contact-example.component.html',
  styleUrls: ['./tenant-contact-example.component.css']
})
export class TenantContactExampleComponent implements OnInit {
  tenant: Tenant = {
    name: '',
    email: '',
    address: {},
    contactPerson: {},
    description: ''
  };

  result: Tenant;

  tenantContactUpdated(tenant: Tenant) {
    this.result = tenant;
  }

  constructor() {}

  ngOnInit() {}
}
