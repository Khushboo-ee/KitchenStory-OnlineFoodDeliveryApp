import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  prodinfo:Products[] = [];
  prodname:any;
  id:string;
  pa:number=1;
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.service.ViewAllProdinfo().subscribe(data=>{
      this.prodinfo = data;
    });
  }

  Search()
  {
    if(this.prodname=="")
    {
      this.ngOnInit();
    }
    else
    {
      this.prodinfo = this.prodinfo.filter(res=>{
        //return res.ename.match(this.ename);
        return res.prodname.toLocaleLowerCase().match(this.prodname);
      });
    }
  }
  key:any='';
  reverse:boolean = false;
  sort(key:any)
  {
    this.key = key;
    this.reverse= !this.reverse;
  }

  // AddToCart()
  // {
  //   this.service.deleteProd(id).subscribe(data=>{
  //     console.log(data);
  //     this.service.ViewAllProdinfo();
  //   });
  // }
}
