import { Order } from './../model/order';
import { CRUDService } from './../shared/shirtsCRUD.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[];

  constructor(private sCRUD: CRUDService) { }

  ngOnInit(): void {
     this.sCRUD.getOrders().subscribe((data) => {this.orders = data;
      console.log(data);}
      );
  }

}
