import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private serivce: UserService) {
  }
  //check of de gebruiker ingelogd is of niet, als de user 
  //niet ingelogd is, blokeren wij de user om private routes te bekijken, 
  //door de user naar de login pagin te sturen
  // dus routes met Authorize in de API call
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null){
      let roles = next.data['permittenRoles'] as Array<string>;

      if(roles){
        if(this.serivce.roleMatch(roles)){
          return true;
        }else{
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }

  }
}