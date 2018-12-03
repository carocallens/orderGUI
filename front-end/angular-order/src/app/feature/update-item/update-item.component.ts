import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/core/items/item.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/app/core/items/item';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  private sub: any;
  id: string;
  item$: Observable<Item>;
  
  updateItemForm = new FormGroup(
    {
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(Validators.min(0)),
      amountOfStock: new FormControl(Validators.min(0)) 
    });

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.id = params["id"]});
    this.getItem();
    
  }

  private getItem(){
    this.item$ = this.itemService.getItem(this.id);
    this.item$.subscribe(item => this.updateItemForm
      .setValue({name: item.name, 
      description: item.description, 
      price: item.price, 
      amountOfStock: item.amountOfStock}));
  }

  updateItem(): void{
    this.itemService.updateItem({
      ...this.updateItemForm.value,
      id: this.id
    }).subscribe(item => window.location.href = `itemdetail/${item.id}`);
  }
}

