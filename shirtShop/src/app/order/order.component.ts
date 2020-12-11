import { Order } from './../model/order';
import { CRUDService } from './../shared/shirtsCRUD.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Shirt } from '../model/shirt';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @ViewChild('myForm') orderForm: NgForm;
  order: Order = {shirtId: 0, nom : '', prenom : '', numtel: 0, addresse: '', qte: 0};
  shirt: Shirt;
  submitted = false;


  constructor(private sCRUD: CRUDService, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.currentRoute.snapshot.paramMap.get('id');
    this.order.shirtId = id;
    this.sCRUD.getshirts().subscribe((data) => { this.shirt = data.find((s) => {return s.id === id;});}
      );
  }
  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/
  onSubmit(){
    console.log(this.orderForm);
    this.order = this.orderForm.form.value; 
    this.sCRUD.addOrder(this.order);
    console.log(this.order);
    this.submitted = true;
  }

}
