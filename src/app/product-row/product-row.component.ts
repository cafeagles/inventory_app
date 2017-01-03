import { Component, OnInit } from '@angular/core';
import { Product } from '../product'

@Component({
  selector: 'app-product-row',
  inputs: [ 'product' ],
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  host: {'class' : 'row media'}
})
export class ProductRowComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
