import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ProductActionEvent} from "./DataState";

@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

     globalEventSubject:Subject<ProductActionEvent>= new Subject<ProductActionEvent>();
     globalEventSubjectObservable=this.globalEventSubject.asObservable();

  constructor() { }

  publishEvent(event:ProductActionEvent){
     this.globalEventSubject.next(event);
  }



}
