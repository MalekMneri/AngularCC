import { Shirt } from '../model/shirt';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  constructor(private http: HttpClient) { }
  shirtssUrl : string = "/api/shirts";
getshirts(): Observable<Shirt[]>{
return this.http.get<Shirt[]>(this.shirtssUrl);
}
}
