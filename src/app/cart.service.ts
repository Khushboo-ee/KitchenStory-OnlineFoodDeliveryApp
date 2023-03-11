import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

items: Products[] =[];

addToCart(product: Products) {
  this.items.push(product);
}

getItems() {
  //return this.http.get<Products[]>
   return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
  constructor(
    private http: HttpClient
  ) { }
}
