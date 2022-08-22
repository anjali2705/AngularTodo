import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() { }
  authenticate(username : string, password: string){
    if(username === "Anjali" &&  password === "maurya"){
      sessionStorage.setItem('authenticateUser', username)
      return true;
    }
    else
       return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser') 
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
