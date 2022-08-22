import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
//By using this class we can get response in specific structure
export class HelloWorld{
   constructor(public message : string){
   }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
   let basicAuthHeaderString = this.createBasicAuthenticationHeader();
   let headers= new HttpHeaders({
    Authorization: basicAuthHeaderString
   })
    //   console.log(this.http.get<HelloWorld>('http://localhost:8080/hello-world'))
    return this.http.get<HelloWorld>('http://localhost:8080/hello-world', {headers});
  }

  createBasicAuthenticationHeader(){
    let username = 'user'
    let password ='8cfb6c8c-7b15-4345-8230-8820a70f4629'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
