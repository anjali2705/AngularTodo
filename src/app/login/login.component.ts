import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationServiceService } from '../service/basic-authentication-service.service';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Anjali"
  password = ""
  errorMessage = "Invalid Credential"
  invalidLogin = false
  constructor(private route: Router, 
            private hardCodeAuthenticationservice : HardcodedAuthenticationServiceService,
            private basicAuthenticationservice : BasicAuthenticationServiceService
            ) { }

  ngOnInit(): void {
  }
  handleLogin(){
     if(this.hardCodeAuthenticationservice.authenticate(this.username, this.password)){
      this.route.navigate(['welcome',this.username])
      this.invalidLogin = false
     }
     else{
      this.invalidLogin = true
     }
  }

  handleBasicAuthenticationLogin(){
    this.basicAuthenticationservice.executeAuthenticationService(this.username, this.password).subscribe(
      data=>{
        this.route.navigate(['welcome',this.username])
        this.invalidLogin = false
      },
      error=>{
        this.invalidLogin = true
      }
    )
 }

}
