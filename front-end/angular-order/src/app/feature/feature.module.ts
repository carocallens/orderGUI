import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { RoutingModule } from '../routing/routing.module';
import {CreateItemComponent} from './create-item/create-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { ItemsComponent } from './items/items.component';
import { CustomersComponent } from './customers/customers.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component'

@NgModule({
  declarations: [
    ItemsComponent,
    CreateItemComponent,
    ItemDetailsComponent,
    UpdateItemComponent,
    CustomersComponent,
    SearchFilterPipe,
    CreateCustomerComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CoreModule,
    RoutingModule
  ]
})

export class FeatureModule { }
