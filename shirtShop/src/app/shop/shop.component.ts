import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  public pageSlice: Shirt[];
  shirtsLength: number;
  

  constructor(private sCRUD: CRUDService) { }

  ngOnInit(): void {
      this.sCRUD.getshirts().subscribe((data) => {this.shirts = data;
      console.log(data);
      this.shirtsLength = data.length;
      this.pageSlice = data.slice(0,3);                    }
      );
     // this.pageSlice = this.shirts.slice(0,3);
  }
  onsearch(search: string){
    this.sCRUD.searchShirts(search).subscribe(
      (data) => {
        if ( search != null) {
          this.pageSlice = data;
        }
      }
    );
  }
  buyClicked(shirt: Shirt){
    this.clickedShirt = shirt;
    this.shirtBool = true;
  }
  OnPageChange(event: PageEvent)
  {
    console.log(event);
    const startIndex = event.pageSize * event.pageIndex;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.shirts.length){
      endIndex = this.shirts.length;
    }
    this.pageSlice = this.shirts.slice(startIndex,endIndex);
  }


}
