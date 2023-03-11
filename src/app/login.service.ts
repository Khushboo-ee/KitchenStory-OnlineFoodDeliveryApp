import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';
import { Users } from './users';
import { Observable } from 'rxjs';

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
    return this.http.get<Users[]>(this.apiUrlUsers);
  }

  GetUserById(username:any){
    return this.http.get(this.apiUrlUsers + '/' + username);
  }

  CheckLoginUser(){
    return sessionStorage.getItem('username')!=null;// if gteItem have a value wiil return true else false.
  }

  //admin
  CreateNewAdmin(admindata:any){
    return this.http.post(this.apiUrlAdmin,admindata);
  }
  // UpdateAdmin(admindata:any){
  //   return this.http.put(this.apiUrlAdmin,admindata);
  // }
   UpdateAdmin(admindata:any){
    return this.http.put(`${this.apiUrlAdmin}`, admindata);
  }
  ViewAllAdmininfo(){
    return this.http.get(this.apiUrlAdmin);
  }

  GetAdminById(id:any){
    return this.http.get(this.apiUrlAdmin + '/' + id);
  }
  CheckLoginAdmin(){
    return sessionStorage.getItem('username')!=null;// if gteItem have a value wiil return true else false.
  }
  
  //Products
  AddNewProducr(prod:any){
    return this.http.post(this.apiUrlProd,prod);
  }
  ViewAllProdinfo(){
    return this.http.get<Products[]>(this.apiUrlProd);
  }

  GetProductById(prodid:any){
    return this.http.get(this.apiUrlProd + '/' + prodid);
  }

   updateProducts(prodid:number, prod:Products):Observable<Object>{
    return this.http.put(`${this.apiUrlProd}/${prodid}`, prod);
  }

  deleteProd(prodid:number):Observable<Object>{
    return this.http.delete(`${this.apiUrlProd}/${prodid}`);
  }
  
  
}
