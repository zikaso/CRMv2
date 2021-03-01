import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {DataState, DataStateEnum} from "../../state/DataState";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     readonly DataStateEnum=DataStateEnum;
     products$:Observable<DataState<ProductModel[]>>;

   constructor( private productService:ProductService) { }

    ngOnInit(): void {

    }

   getAllProduct()
   {
    this.products$ = this.productService.getProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message, error_code: "Not Found"}))
    );
  }



  onCatchEvent($event: any) {
      this.getAllProduct();
  }



}
