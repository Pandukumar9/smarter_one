import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [NgFor,NgIf],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService,private route:Router) {
    this.cartItems = this.cartService.getCart();
  }

  // Get total price of items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  // Increment item quantity
  incrementQuantity(item: any): void {
    item.quantity++;
  }

  // Decrement item quantity
  decrementQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Clear cart
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  proceedToBuy() {
    // Example logic: Navigate to the checkout page or process the order
    console.log('Proceeding to buy:', this.cartItems);

    // Example: Navigate to the checkout page
    this.route.navigate(['/checkout']);
  }

  savedItems: any[] = [];


  // Remove item from cart
  removeItem(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  // Save for later
  saveForLater(item: any): void {
    this.savedItems.push(item);
    this.removeItem(item);
  }

  // Move to cart from saved items
  moveToCart(item: any): void {
    this.cartItems.push(item);
    this.removeFromSavedItems(item);
  }

  // Remove from saved items
  removeFromSavedItems(item: any): void {
    this.savedItems = this.savedItems.filter(savedItem => savedItem !== item);
  }



}
