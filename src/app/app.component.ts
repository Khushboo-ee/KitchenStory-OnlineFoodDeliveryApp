import { Component, DoCheck} from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
 
  title = 'KitchenStory-OnlineFoodDeliveryApp';
  isNavbarVisible=false;

  constructor(private router:Router){}
  ngDoCheck(): void {
    let currentUrl = this.router.url;
    console.log(currentUrl);
    
    if(currentUrl=="/userLogin" || currentUrl=="/userReg" || currentUrl=="/adminLogin" || currentUrl=="/adminHome"|| currentUrl=="/userHome" || currentUrl=="/viewProd" || currentUrl=="/viewUser" || currentUrl=="/adminChngPwd")
    {
      this.isNavbarVisible = false;
    }
    else
    {
      this.isNavbarVisible =true;
    }
  }

}
