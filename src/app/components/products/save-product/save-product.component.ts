import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {
   product:ProductModel;

constructor( private  route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.order)
      {
        this.product=JSON.parse(atob(params.order))
      }

    })
  }

}
