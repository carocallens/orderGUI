import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/customers/customer.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CompileTemplateMetadata } from '@angular/compiler';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  test: string;
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
    this.customerService.createCustomer(this.customerForm.value, this.localPart, this.domain)
    .subscribe(customer => window.location.href = `/customerdetail/${customer.id}`);
  }
  
  get localPart(){
    this.customerForm.get("localpart").valueChanges.subscribe(date => this.test = date);
    return this.test.split('@', 1)[0];
  }

  get domain(){
    this.customerForm.get("localpart").valueChanges.subscribe(date => this.test = date);
    return this.test.split('@', 1)[1];
  }
}
