import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../../models/product.model";
import {ProductActionEvent, ProductActionEventTypes} from "../../../state/DataState";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Output() eventEmitter:EventEmitter<ProductActionEvent>= new EventEmitter();
  @Input("result") p:ProductModel | null=null;


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(p: ProductModel) {
      this.eventEmitter.emit({type:ProductActionEventTypes.EDIT_PRODUCT,payload:p});
  }

  onDelete(p: ProductModel) {

  }
}
