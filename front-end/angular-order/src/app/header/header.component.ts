import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ShoppingCartService } from '../core/orders/shopping-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})

export class HeaderComponent {
constructor( private shoppingcartService: ShoppingCartService){}

  getAmountOfItems(){
    return this.shoppingcartService.showAmount();
  }
}
