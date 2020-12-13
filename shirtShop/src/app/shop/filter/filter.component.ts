import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output('searchBar') searchBarChanged = new EventEmitter<string>();
  @Output('filterEvent') filterClicked = new EventEmitter<string>();
  searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }
  onsearch()
  {
    this.searchBarChanged.emit(this.searchValue);
  }
  onFilter(filter: string){
    this.filterClicked.emit(filter);

  }

}
