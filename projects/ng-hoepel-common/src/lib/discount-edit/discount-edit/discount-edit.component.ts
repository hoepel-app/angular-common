import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Discount } from '@hoepel.app/types';

@Component({
  selector: 'hoepel-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.scss']
})
export class DiscountEditComponent implements OnInit, OnChanges {
  @Input() discounts: ReadonlyArray<Discount> = [];

  @Output() discountsSaved = new EventEmitter<ReadonlyArray<Discount>>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      discounts: this.fb.array([])
    });

    this.updateForm(this.discounts || []);
  }

  ngOnChanges(): void {
    this.updateForm(this.discounts || []);
  }

  updateForm(discounts: ReadonlyArray<Discount>): void {
    if (this.form) {
      while (this.discountsArray.length) {
        this.discountsArray.removeAt(0);
      }

      discounts.forEach(discount => {
        this.discountsArray.push(this.createDiscountGroup(discount.name, discount.relativeDiscount));
      });
    }
  }

  get discountsArray(): FormArray {
    return this.form.get('discounts') as FormArray;
  }

  addDiscount(): void {
    this.discountsArray.push(this.createDiscountGroup('', 0));
    this.form.markAsDirty();
  }

  deleteDiscount(index: number): void {
    this.discountsArray.removeAt(index);
    this.form.markAsDirty();
  }

  reset(): void {
    this.updateForm(this.discounts);
  }

  submit(): void {
    if (this.form.valid) {
      this.discountsSaved.next(
        this.form
          .getRawValue()
          .discounts.map(value => new Discount({ name: value.name, relativeDiscount: value.relativeDiscount }))
      );
      this.form.markAsPristine();
    }
  }

  private createDiscountGroup(name: string, relativeDiscount: number): FormGroup {
    return this.fb.group({
      name: [name, Validators.required],
      relativeDiscount: [relativeDiscount, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }
}
