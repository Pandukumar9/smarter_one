import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-common-header',
  imports: [NgFor,NgIf,RouterLink,RouterLinkActive],
  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.scss'
})
export class CommonHeaderComponent implements OnInit {

  orderlength:any;
  constructor(public cart:CartService){}
  ngOnInit() {
    this.cart.cartlength.subscribe(res => {
      console.log(res,'res');
      this.orderlength = res;
    })
  }
  notifications: string[] = [
    'New user registered',
    'Order #1234 has been shipped',
    'You have a new message'
  ];

  cartItems = [
    // Example items (replace with your logic)
    { id: 1, name: 'Dosa', price: 50, quantity: 2 },
    { id: 2, name: 'Idly', price: 30, quantity: 3 },
  ];

  // Total number of cart items
  get cartItemsCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
}
