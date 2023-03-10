import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Builder } from 'protractor';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
  // msg:any;
  // router: Router;
  // name:string="";
  // gender:string="";
  // username:string="";
  // pwd:string="";

  constructor(
    // private builder:Builder,
    // private service:LoginService
  ) { }

  ngOnInit(): void {
  }
  // SaveValues(frmReg:any){
  //   if(frmReg.valid){
  //     this.service.CreateNewUser(frmReg.value).subscribe(data=>{
  //       alert("user registered");
  //     });
  //   }
  //   else{
  //     this.msg="Invalid form";
  //   }

  // }

}
