import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartlength = new BehaviorSubject(0);
  constructor() { }
  private cart: any[] = [];

  addToCart(item: any) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push({ ...item }); // Add new item
    }
    this.cartlength.next(this.cart.length);
    console.log(`${item.name} (x${item.quantity}) added to the cart!`);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }
}
