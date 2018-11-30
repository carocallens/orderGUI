import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { CreateItemComponent } from '../feature/create-item/create-item.component';
import { ItemDetailsComponent } from '../feature/item-details/item-details.component';
import { UpdateItemComponent } from '../feature/update-item/update-item.component';
import { ItemsComponent } from '../feature/items/items.component';
import { CustomersComponent } from '../feature/customers/customers.component';
import { CreateCustomerComponent } from '../feature/create-customer/create-customer.component';
import { CustomerDetailsComponent } from '../feature/customer-details/customer-details.component';

const routes: Routes= [
  { path: 'items', component: ItemsComponent},
  { path: 'createitem', component: CreateItemComponent},
  { path:'itemdetail/:id', component: ItemDetailsComponent},
  { path: 'update/:id', component: UpdateItemComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'createcustomer', component: CreateCustomerComponent},
  { path: 'customerdetail/:id', component: CustomerDetailsComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class RoutingModule { }
