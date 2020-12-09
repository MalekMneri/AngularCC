import { Shirt } from './../../model/shirt';
import { CRUDService } from './../../shared/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  shirts: Shirt[];
  clickedShirt: Shirt;
  shirtBool = false;


  constructor(private sCRUD: CRUDService) { }

  ngOnInit(): void {
    this.sCRUD.getshirts().subscribe((data) => this.shirts = data);
    console.log(this.shirts);
    
  }
  buyClicked(shirt: Shirt){
    this.clickedShirt = shirt;
    this.shirtBool = true;
  }

}
