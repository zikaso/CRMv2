import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

@Output()  eventEmitter:EventEmitter<any> = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
  }

  onShowAll() {
     this.eventEmitter.emit()
  }

  onSearch(value: any) {

  }

  onAdd() {

  }


}
