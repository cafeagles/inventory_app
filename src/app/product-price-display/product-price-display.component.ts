import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price-display',
  inputs: ['price'],
  templateUrl: './product-price-display.component.html',
  styleUrls: ['./product-price-display.component.css']
})
export class ProductPriceDisplayComponent implements OnInit {
  price: number;
  constructor() { }

  ngOnInit() {
  }

}
