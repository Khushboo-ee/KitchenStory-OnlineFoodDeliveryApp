import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router, private service:LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.service.CheckLoginAdmin()==true)
      {
          if(this.router.url.length>0)
          {
            let urlMap = route.url[0].path;
            if(urlMap=="adminHome")
              return true;
        }
      }
        else
        {
          alert("First admin has to login");
          console.log("First admin has to login");
          this.router.navigate(['/adminLogin']);
          return false;
        }
    }
  }
  
  
  

