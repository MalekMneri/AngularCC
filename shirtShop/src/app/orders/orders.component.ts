import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private sCRUD: CRUDService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.sCRUD.getOrders().subscribe((data) => {this.orders = data;}
      );
  }
  onDelete(id: string){
    this.sCRUD.deleteOrder(id).subscribe(() => {console.log('deleted id: ',id);});
    window.location.reload();
  }
  onUpdate(id: string){

    this.router.navigate(['orderEdit/',id]);
  }

}
