import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InventoryAppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPriceDisplayComponent } from './product-price-display/product-price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';

@NgModule({
  declarations: [
    InventoryAppComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductPriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryAppComponent]
})
export class InventoryAppModule { }
