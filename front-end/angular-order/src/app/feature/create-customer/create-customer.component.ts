import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customers/customer.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormGroup({
      streetName: new FormControl(),
      houseNumber: new FormControl(),
      postalCode: new FormControl(),
      country: new FormControl()
    }),
    email: new FormGroup({
      localPart: new FormControl(),
      domain: new FormControl(),
      complete: new FormControl()
    }),
    phoneNumber: new FormGroup({
      countryCallingCode: new FormControl(),
      number: new FormControl()
    })
  });

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  createCustomer(): void{
    this.customerService.createCustomer(this.customerForm.value)
    .subscribe(customer => window.location.href = `/customerdetail/${customer.id}`);
  }
}
