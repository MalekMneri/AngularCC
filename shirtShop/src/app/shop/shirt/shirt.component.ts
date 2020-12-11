import { Shirt } from './../../model/shirt';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  @Input() shirt: Shirt;
  @Input() categorie: string;
  @Output('buyClicked') buyClickedEvent = new EventEmitter<Shirt>();
  constructor(private router: Router) { }


  buyClicked(shirt: Shirt){
    this.buyClickedEvent.emit(shirt);
    this.router.navigate(['/order',shirt.id]);
  }
  ngOnInit(): void {

      this.categorie = this.shirt.categorie;

  }

}
