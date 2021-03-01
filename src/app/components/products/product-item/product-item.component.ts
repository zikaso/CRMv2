import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OuterSubscriber} from "rxjs/internal-compatibility";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Output() eventEmitter:EventEmitter<any>= new EventEmitter<any>();
  @Input("result") p:ProductModel | null=null;


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(p: ProductModel) {

  }

  onDelete(p: ProductModel) {

  }
}
