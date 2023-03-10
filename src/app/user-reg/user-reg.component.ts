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
 
msg:any;
  constructor(
    private builder :FormBuilder, 
    private service : LoginService, 
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  userRegForm = this.builder.group(
    {
      fullname: this.builder.control('', Validators.required),
      contact: this.builder.control('', Validators.required),
      username: this.builder.control('', Validators.required),
      id: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required)
    });

    proceedRegister()
    {
      if(this.userRegForm.valid)
      {
        this.service.CreateNewUser(this.userRegForm.value).subscribe(data=>{
          alert("User Registered");
          this.router.navigate(['userLogin']);
        });
      }
      else
      {
        this.msg = "Invalid Form";
      }
    }
}
