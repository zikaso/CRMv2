import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductActionEvent, ProductActionEventTypes} from "../../../state/DataState";
import {EventDriverService} from "../../../state/event.driver.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

@Output()  eventEmitter:EventEmitter<ProductActionEvent> = new EventEmitter()


  constructor(   private  eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onShowAll() {
    // this.eventEmitter.emit({type:ProductActionEventTypes.GET_ALL_PRODUCT})
    this.eventDriverService.publishEvent({type:ProductActionEventTypes.GET_ALL_PRODUCT})
  }

  onSearch(value: any) {

  }

  onAdd() {
    // this.eventEmitter.emit({type:ProductActionEventTypes.ADD_NEW_PRODUCT})
      this.eventDriverService.publishEvent({type:ProductActionEventTypes.ADD_NEW_PRODUCT})
  }


}
