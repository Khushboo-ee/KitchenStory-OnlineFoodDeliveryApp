import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { LoginService } from '../login.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userinfo :Users[] = [];
  fullname:any;
  pa:number=1;

  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.service.ViewAllUserinfo().subscribe(data=>{
      this.userinfo = data;
    });
  }

  Search()
  {
    if(this.fullname=="")
    {
      this.ngOnInit();
    }
    else
    {
      this.userinfo = this.userinfo.filter(res=>{
        //return res.ename.match(this.ename);
        return res.fullname.toLocaleLowerCase().match(this.fullname);
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


}
