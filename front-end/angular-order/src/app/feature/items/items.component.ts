import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/core/items/item';
import { ItemService } from 'src/app/core/items/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

}
