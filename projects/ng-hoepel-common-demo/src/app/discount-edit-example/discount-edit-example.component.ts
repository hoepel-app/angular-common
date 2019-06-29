import { Component, OnInit } from '@angular/core';
import { Discount } from '@hoepel.app/types';

@Component({
  selector: 'app-discount-edit-example',
  templateUrl: './discount-edit-example.component.html',
  styleUrls: ['./discount-edit-example.component.css']
})
export class DiscountEditExampleComponent implements OnInit {
  discounts: ReadonlyArray<Discount> = [];

  constructor() {}

  ngOnInit() {}

  discountsSaved(discounts) {
    console.log(discounts);
  }
}
