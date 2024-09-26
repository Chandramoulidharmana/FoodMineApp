// import { CanActivateFn } from '@angular/router';

import { state } from "@angular/animations";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../../services/user.service";
import { stat } from "fs";

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate{
  
  constructor(private userService: UserService, private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
    if(this.userService.CurrentUser.token) return true;

    this.router.navigate(['/login'], {queryParams:{returnUrl : state.url}})
    return false;
  }
}
