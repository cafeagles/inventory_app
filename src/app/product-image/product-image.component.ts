import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-image',
  inputs: ['product'],
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
