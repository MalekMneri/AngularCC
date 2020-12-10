import { Component, OnInit } from '@angular/core';
import { Shirt } from '../model/shirt';
import { CRUDService } from '../shared/shirtsCRUD.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    shirts: Shirt[];
  clickedShirt: Shirt;
  shirtBool = false;
  clickedCategorie: string;

  constructor(private sCRUD: CRUDService) { }

  ngOnInit(): void {
      this.sCRUD.getshirts().subscribe((data) => {this.shirts = data;
      console.log(data);}
      );
      console.log(this.shirts);
  }
  buyClicked(shirt: Shirt){
    this.clickedShirt = shirt;
    this.shirtBool = true;
  }


}
