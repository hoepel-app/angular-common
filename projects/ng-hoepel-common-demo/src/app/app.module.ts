import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TenantContactModule } from '../../../ng-hoepel-common/src/lib/tenant-contact';
import { TenantContactExampleComponent } from './tenant-contact-example/tenant-contact-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconRegistry } from '@angular/material';
import { DiscountEditExampleComponent } from './discount-edit-example/discount-edit-example.component';
import { DiscountEditModule } from '../../../ng-hoepel-common/src/lib/discount-edit';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TenantContactExampleComponent, DiscountEditExampleComponent],
  imports: [
    BrowserModule,
    TenantContactModule,
    DiscountEditModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
