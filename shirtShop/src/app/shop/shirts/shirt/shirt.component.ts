import { Shirt } from './../../../model/shirt';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  @Input() shirt: Shirt;
  @Output('buyClicked') buyClickedEvent = new EventEmitter<Shirt>();
  constructor() { }


  buyClicked(shirt: Shirt){
    this.buyClickedEvent.emit(shirt);
  }
  ngOnInit(): void {
  }

}
