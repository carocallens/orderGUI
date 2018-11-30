import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()

export class ItemService {
  
  private itemsUrl = 'http://localhost:57340/api/Items';
  
  constructor(private http: HttpClient) { 
    
  }
  
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }
  
  getItem(id: string): Observable<Item>{
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url);
  }
  
  createItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.itemsUrl, item, httpOptions);
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put(`${this.itemsUrl}/${item.id}`, item, httpOptions);
  }
}
