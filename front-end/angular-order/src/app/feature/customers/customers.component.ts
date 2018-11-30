import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/core/customers/customer';
import { CustomerService } from 'src/app/core/customers/customer.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers: Customer[];
  customers$: Observable<Customer[]>;
  customerName: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
    
  }

  getAllCustomers(): void{
    this.customerService.getCustomers()
    .subscribe(customers => this.customers = customers);
  }

}
