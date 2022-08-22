import { NgIfContext } from '@angular/common';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationServiceService } from '../basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService  implements HttpInterceptor{

  constructor(
    private basicAuthenticationservice : BasicAuthenticationServiceService
  ) { }
  intercept(request: HttpRequest<any>, next:HttpHandler){
    // let username ='user'
    // let password = '8cfb6c8c-7b15-4345-8230-8820a70f4629'
    // let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
    let  basicAuthHeaderString = this.basicAuthenticationservice.getAuthenticateduserToken();
    let username = this.basicAuthenticationservice.getAuthenticatedUser();
    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders :{
        Authorization : basicAuthHeaderString
      }
    })
  }
    return next.handle(request);
  }
 
}
