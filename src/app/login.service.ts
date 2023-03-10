import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  private apiUrlUsers = "http://localhost:3000/users";
  private apiUrlAdmin = "http://localhost:3000/admin";
  private apiUrlProd = "http://localhost:3000/products";

  //users
  CreateNewUser(userdata:any){
    return this.http.post(this.apiUrlUsers,userdata);
  }

  ViewAllUserinfo(){
    return this.http.get(this.apiUrlUsers);
  }

  GetUserById(username:any){
    return this.http.get(this.apiUrlUsers + '/' + username);
  }

  //admin
  CreateNewAdmin(admindata:any){
    return this.http.post(this.apiUrlAdmin,admindata);
  }
  ViewAllAdmininfo(){
    return this.http.get(this.apiUrlAdmin);
  }

  GetAdminById(username:any){
    return this.http.get(this.apiUrlAdmin + '/' + username);
  }
  
  //Products
  AddNewProducr(prod:any){
    return this.http.post(this.apiUrlProd,prod);
  }
  ViewAllProdinfo(){
    return this.http.get(this.apiUrlProd);
  }

  GetProductById(prodid:any){
    return this.http.get(this.apiUrlProd + '/' + prodid);
  }
  
  
}
