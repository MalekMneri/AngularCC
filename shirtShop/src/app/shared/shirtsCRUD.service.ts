import { Order } from './../model/order';
import { Shirt } from '../model/shirt';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  shirtsUrl : string = "/api/shirts";
  ordersUrl : string = "/api/orders";
getshirts(): Observable<Shirt[]>{
return this.http.get<Shirt[]>(this.shirtsUrl);
}
 addOrder (order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order, this.httpOptions);}

}
