import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardCodeAuthenicateService : HardcodedAuthenticationServiceService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardCodeAuthenicateService.isUserLoggedIn())
    return true
   
    this.router.navigate(['login'])
    return  false;
  }
}
