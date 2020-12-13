import { Shirt } from './../../model/shirt';
import { CRUDService } from './../../shared/shirtsCRUD.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  orderEditForm: FormGroup;
  fbuilder: FormBuilder =  new FormBuilder();
  oldOrder: Order;
  newOrder: Order;
  shirt: Shirt;

  constructor(private currentRoute: ActivatedRoute, private sCRUD: CRUDService,private router: Router) { }
  
  ngOnInit(){
     let id = this.currentRoute.snapshot.paramMap.get('id');
     let shirtId: string; 
    this.sCRUD.getorderById(id).subscribe((data) => {
      this.oldOrder = data;
      shirtId = data.shirtId;
    });
    
    this.sCRUD.getshirtById(shirtId).subscribe((data) => this.shirt= data);

    this.orderEditForm = this.fbuilder.group({
      nom : ['',Validators.required],
      prenom : ['',Validators.required],
      addresse :  ['',Validators.required],
      numtel : ['',[Validators.required, Validators.pattern("[0-9]{8}")]],
      qte : ['0',[Validators.required, Validators.pattern("[1-9]+")]]
    });
  }
  onSubmit(){
    console.log(this.orderEditForm.value);
    this.newOrder = this.orderEditForm.value;
    this.newOrder.shirtNom = this.oldOrder.shirtNom;
    this.newOrder.shirtId = this.oldOrder.shirtId;
    this.sCRUD.updateOrder(this.oldOrder.id,this.orderEditForm.value).subscribe();
    this.router.navigate(['/myOrders']);

  }
  onShowOldValues(){
    this.orderEditForm.setValue(this.oldOrder);
  }


}
