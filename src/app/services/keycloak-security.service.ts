import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

    init(){
      console.log("*** KeycloakSecurityService ***")
    }

  constructor() { }
}
