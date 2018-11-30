import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/items/item';
import { ItemService } from 'src/app/core/items/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;
  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.getItem();
  }

  getItem(): void{
    
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
    .subscribe(item => this.item = item);
  }
}
