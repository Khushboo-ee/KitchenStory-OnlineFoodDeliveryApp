import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartservice.getItems();
  constructor(
    private cartservice:CartService,
    private httpclient:HttpClient
  ) { }

  ngOnInit(): void {
  }

}
