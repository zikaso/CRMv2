import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private  http:HttpClient) { }

  public  getProducts():Observable<ProductModel[]>{
     return   this.http.get<ProductModel[]>(environment.host+"/products")
  }

}
