import { Order } from './../model/order';
import { CRUDService } from './../shared/shirtsCRUD.service';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Shirt } from '../model/shirt';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  //@ViewChild('myForm',{static: true}) orderForm: NgForm;
  order: Order;
  shirt: Shirt;
  submitted = false;


  constructor(private sCRUD: CRUDService, private currentRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.sCRUD.getshirtById(id).subscribe((data) => this.shirt = data);
  }
  onSubmit(form: NgForm){

    console.log('parametre',form.value);  
    this.order = <Order>form.value;
    this.order.shirtNom = this.shirt.nom;
    //this.order.id = '0';
    this.order.shirtId = this.shirt.id;
    this.sCRUD.addOrder(this.order)
      .subscribe(() => {
         this.router.navigate(['/myOrders']);
        }
      );   
    console.log(this.order);
    this.submitted = true;
  }

}
