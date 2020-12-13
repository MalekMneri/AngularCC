import { Order } from './../../model/order';
import { CRUDService } from './../../shared/shirtsCRUD.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit,OnChanges {
  @ViewChild('myForm',{static: true}) orderForm: NgForm;
  oldOrder: Order;
  newOrder: Order;
  constructor(private currentRoute: ActivatedRoute, private sCRUD: CRUDService) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.sCRUD.getorderById(id).subscribe((data) => console.log(data));
    console.log(this.oldOrder);
  }

}
