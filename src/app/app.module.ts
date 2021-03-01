import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Route, RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { SaveProductComponent } from './components/products/save-product/save-product.component';
import {KeycloakSecurityService} from "./services/keycloak-security.service";
import { NavBarComponent } from './components/products/nav-bar/nav-bar.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';


 const routes:Routes=[
  {path:"products",component:ProductsComponent},
  ]

export function kcForctory( keycloakSecur:KeycloakSecurityService) {
  return ()=> keycloakSecur.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SaveProductComponent,
    NavBarComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakSecurityService],useFactory:kcForctory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
