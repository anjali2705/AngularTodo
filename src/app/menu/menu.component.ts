import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   isUserLoggedin : boolean = false;
  constructor(public hardcodedAuthenticationServiceService: HardcodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.isUserLoggedin = this.hardcodedAuthenticationServiceService.isUserLoggedIn()
  }

}
