import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  customerId = new FormControl();
  @Input() amountOfStock;
  @Input() url;

  constructor() { }

  ngOnInit() {
  }

}
