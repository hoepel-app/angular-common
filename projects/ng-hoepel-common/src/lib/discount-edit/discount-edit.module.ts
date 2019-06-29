import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountEditComponent } from './discount-edit/discount-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [DiscountEditComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [DiscountEditComponent]
})
export class DiscountEditModule {}
