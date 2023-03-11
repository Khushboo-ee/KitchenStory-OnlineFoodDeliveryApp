import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {

  msg:any;
  result:any;

  constructor(
     private builder:FormBuilder, 
    private service:LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

   adminUpdateForm = this.builder.group(
    {
      username: this.builder.control('',Validators.required),
      password: this.builder.control('',Validators.required)

    } );

  proceedUpdate(){
      if(this.adminUpdateForm.valid)
      {
          this.service.UpdateAdmin(this.adminUpdateForm.value.username).subscribe(data=>{
            if(data!=null){
            this.result = data;
            this.result.password = this.adminUpdateForm.value.password
              sessionStorage.setItem('username', this.result.username);
                    // it will store in sessio memory(browser memory), so that it can access any other component of the site.
              this.router.navigate(['adminLogin']);
            }
         
          }, //eiher data or errror will work, data--> sucess correct username, errror-->failed to get usrename that is tored in jon file

          error=>{
            console.log(error);
            this.msg = "Invalid Username";
          });
      }
      else
      {
        this.msg = "Please fill username and password";
      }
    }
  }


