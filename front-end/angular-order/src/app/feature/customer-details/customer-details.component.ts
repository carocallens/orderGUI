import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customers/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/core/customers/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;
  constructor(private customerService: CustomerService,  private route: ActivatedRoute) { }

  ngOnInit() {
  this.getCustomer();
  }

  getCustomer(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
    .subscribe(customer => this.customer = customer);
  }

}
