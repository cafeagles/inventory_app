import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class InventoryAppComponent {
  products: Product[];

  logProductClicked(event){
    console.log(event)
  }

  constructor(){
    this.products = [ 
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vets'],
        238.99
      ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      )
    ]
  }
}
