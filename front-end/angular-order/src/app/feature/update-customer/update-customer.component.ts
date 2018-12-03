import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/core/customers/customer';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/core/customers/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})

export class UpdateCustomerComponent implements OnInit {

  private sub: any;
  customer$: Observable<Customer>;
  id: string;

  updateCustomerForm = new FormGroup({
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

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.id = params["id"]});
    this.getCustomer();
  }

  private getCustomer(){
    this.customer$ = this.customerService.getCustomer(this.id);
    this.customer$.subscribe(customer => this.updateCustomerForm.setValue({
      firstName: customer.firstName,
      lastName: customer.lastName,
      address:
      {streetName: customer.address.streetName,
      houseNumber: customer.address.houseNumber,
      postalCode: customer.address.postalCode,
      country: customer.address.country},
      email:
      {localPart: customer.email.localPart,
      domain: customer.email.domain,
      complete: customer.email.complete},
      phoneNumber:
      {countryCallingCode: customer.phoneNumber.countryCallingCode,
      number: customer.phoneNumber.number}
    }));
  }

    updateCustomer(): void{
      this.customerService.updateCustomer({...this.updateCustomerForm.value, id: this.id})
      .subscribe(customer => window.location.href = `customerdetail/${customer.id}`);

    }
  }
