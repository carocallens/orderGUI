import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ItemService } from 'src/app/core/items/item.service';
import { BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})

export class CreateItemComponent implements OnInit {
  
  
  itemForm = new FormGroup(
    {
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl('0', Validators.min(0)),
      amountOfStock: new FormControl('0', Validators.min(0)) 
    });

  constructor(private itemService:  ItemService) { }

  ngOnInit() {
  }

  createItem(): void {
    this.itemService.createItem(this.itemForm.value)
    .subscribe(item => window.location.href = `/itemdetail/${item.id}`);
  }

  

}
