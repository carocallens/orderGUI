import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './items/item.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerService } from './customers/customer.service';
import { ShoppingCartService } from './orders/shopping-cart.service';
import { OrderService } from './orders/order.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ItemService,
    CustomerService,
    ShoppingCartService,
    OrderService
  ]
})
export class CoreModule { }
