import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router:Router, private service:LoginService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.CheckLoginUser()==true)
    {
        if(this.router.url.length>0)
        {
          let urlMap = route.url[0].path;
          if(urlMap=="userHome"||urlMap=="cart")
            return true;
      }
    }
      else
      {
        alert("First user has to login");
        console.log("First user has to login");
        this.router.navigate(['/userLogin']);
        return false;
      }
  } 
}
