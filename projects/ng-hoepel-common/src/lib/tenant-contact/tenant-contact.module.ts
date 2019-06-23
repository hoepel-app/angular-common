import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantContactDumbComponent } from './tenant-contact-dumb/tenant-contact-dumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TenantContactDumbComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class TenantContactModule {}
