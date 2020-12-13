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
  shirtsUrl : string = "http://localhost:3000/shirts";
  ordersUrl : string = "http://localhost:3000/orders";
getshirts(): Observable<Shirt[]>{
  return this.http.get<Shirt[]>(this.shirtsUrl);
}
getshirtById(id: string): Observable<Shirt>{
  return this.http.get<Shirt>(this.shirtsUrl+'/'+id);
}
searchShirts(search: string): Observable<any> {
    return this.http.get(
      'http://localhost:3000/' + 'shirts?nom_like=' + search
    );
}
getorderById(id: string): Observable<Order>{
  return this.http.get<Order>(this.ordersUrl+'/'+id);
}
getOrders(): Observable<Order[]>{
  console.log(this.http.get<Order[]>(this.ordersUrl));
  return this.http.get<Order[]>(this.ordersUrl);
}
addOrder (order: Order): Observable<Order> {
  console.log(order);
  return this.http.post<Order>(this.ordersUrl,order);
  
  }
deleteOrder (id: string): Observable<Order> {
  return this.http.delete<Order>(this.ordersUrl+'/'+id);
}

}
