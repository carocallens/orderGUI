import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class CustomerService {

  private customersUrl = 'http://localhost:57340/api/Customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {

    return this.http.get<Customer[]>(this.customersUrl);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions);
  }

  getCustomer(id: string): Observable<Customer> {

    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
  
  updateCustomer(customer : Customer): Observable<any> {
    return this.http.put(`${this.customersUrl}/${customer.id}`, customer, httpOptions);
  }
}
