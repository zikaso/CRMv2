import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModel} from "../../models/product.model";
import {Observable, of} from "rxjs";
import {catchError, map, startWith} from "rxjs/operators";
import {DataState, DataStateEnum, ProductActionEvent, ProductActionEventTypes} from "../../state/DataState";
import {Router} from "@angular/router";
import {EventDriverService} from "../../state/event.driver.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
     readonly DataStateEnum=DataStateEnum;
     products$:Observable<DataState<ProductModel[]>>;


   constructor( private productService:ProductService ,
                private router:Router,
                private  eventDriverService:EventDriverService
   ) { }

    ngOnInit(): void {
      this.eventDriverService.globalEventSubjectObservable.subscribe($event => {
          this.onCatchEvent($event)
      })
    }

   getAllProduct()
   {
      this.products$ = this.productService.getProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage: err.message, error_code: "Not Found"}))
    );
  }



  onCatchEvent($event: ProductActionEvent) {
     switch ($event.type){
       case ProductActionEventTypes.GET_ALL_PRODUCT: this.getAllProduct();break;
       case ProductActionEventTypes.ADD_NEW_PRODUCT: this.onADDNewProductItem();break;
       case ProductActionEventTypes.EDIT_PRODUCT: this.onEditProductItem($event.payload);break;
     }

  }

  onADDNewProductItem(){
    this.router.navigateByUrl("/save_product/add");
  }


  onEditProductItem(p:ProductModel){
    this.router.navigate(['/save_product/edit'], { queryParams: { order: btoa( JSON.stringify(p))} });

  }

}
