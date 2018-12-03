import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/items/item';
import { ItemService } from 'src/app/core/items/item.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ShoppingCart } from 'src/app/core/orders/shopping-cart';
import { ShoppingCartService } from 'src/app/core/orders/shopping-cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;
  itemAmount = new FormControl('0', [Validators.min(1), Validators.pattern('^[0-9]*$')]);

  constructor(private itemService: ItemService, private route: ActivatedRoute, private shoppingcartService: ShoppingCartService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  addToCart(): void {
    this.shoppingcartService.addToCart({
      itemId: this.item.id,
      orderedAmount: this.itemAmount.value
    });
  }
}
