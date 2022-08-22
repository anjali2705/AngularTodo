import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {
  constructor( private http: HttpClient) { }

  //Hard Coded Authentication
  authenticate(username : string, password: string){
    if(username === "Anjali" &&  password === "maurya"){
      sessionStorage.setItem('authenticateUser', username)
      return true;
    }
    else
       return false;
  }

  //Basic Authentication
  executeAuthenticationService(username : string, password: string){
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
      
    let headers= new HttpHeaders({
     Authorization: basicAuthHeaderString
    })
     //   console.log(this.http.get<HelloWorld>('http://localhost:8080/hello-world'))
     return this.http.get<Authentication>('http://localhost:8080/basicAuth', {headers}).pipe(
      map(
        data=>   {
          sessionStorage.setItem('authenticateUser', username)
          sessionStorage.setItem('token', basicAuthHeaderString)
          return data;
        }  
      )
     );
   }


   //JWTAuthentication Service
   executeJWTAuthenticationService(username:string, password:string) {
    
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticateUser', username);
            sessionStorage.setItem('token', `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }
 
   
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser') 
    return !(user === null)
  }

  getAuthenticatedUser(){
      return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticateduserToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem('token');
    }
    return null;
    
}


  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token')
  }
}

export class Authentication{
  constructor(public message:string){}
}