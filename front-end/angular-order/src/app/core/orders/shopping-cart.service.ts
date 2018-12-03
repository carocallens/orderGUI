import { Injectable, Output, EventEmitter } from '@angular/core';
import { ItemGroup } from './ItemGroup';


@Injectable()

export class ShoppingCartService {
  
  itemGroups: Array<ItemGroup>;

  constructor() {
    this.itemGroups = new Array<ItemGroup>();
  }

  addToCart(itemGroup: ItemGroup) {
    this.itemGroups.push(itemGroup);
  }

  showAmount(): number {
    return this.itemGroups.length;
  }
}


