import { Shirt } from './../model/shirt';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  apiUrl: string = "";
getData(): Observable<Shirt[]>{
return this.http.get<Type[]>(this.apiUrl);
}

  constructor() { }
}
