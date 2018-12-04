import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/core/items/item.service';
import { Item } from 'src/app/core/items/item';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/core/orders/shopping-cart.service';
import { ItemGroup } from 'src/app/core/orders/ItemGroup';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.css']
})
export class ShoppingCartDetailsComponent implements OnInit {
  
  itemGroupsWithItem: Array<{ orderedAmount: number, item$: Observable<Item> }>;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private itemService: ItemService) { }
    
  ngOnInit() {
    this.itemGroupsWithItem = this.itemGroups.map(itemGroup => ({
      orderedAmount: itemGroup.orderedAmount,
      item$: this.getItemForItemGroup(itemGroup.itemId),
    }));
  }
  
  get itemGroups() {
    return this.shoppingCartService.itemGroups;
  }
  
  getItemForItemGroup(itemId: string) {
    return this.itemService.getItem(itemId);
  }
  
  calculateItemGroupPrice(itemgroup: ItemGroup, item: Item ) {      
    let price = item.price;
    let orderAmount = itemgroup.orderedAmount;
    return price * orderAmount;
  }
}
  