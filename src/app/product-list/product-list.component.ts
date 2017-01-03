import { Component, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: Product[];

  onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
  constructor() { 
    this.onProductSelected = new EventEmitter();
  }
}
