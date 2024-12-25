import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-checkout',
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  constructor(private route:Router){}
  cartItems = [
    { id: 1, name: 'Dosa', price: 50, quantity: 2 },
    { id: 2, name: 'Idly', price: 30, quantity: 3 },
    { id: 3, name: 'Bonda', price: 20, quantity: 4 },
  ];

  userDetails = {
    name: '',
    email: '',
    address: '',
  };

  paymentMethod: string = '';

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  placeOrder() {
    if (!this.userDetails.name || !this.userDetails.email || !this.userDetails.address || !this.paymentMethod) {
      alert('Please fill in all details and select a payment method.');
      return;
    }

    alert('Order placed successfully!');
    console.log('Order Details:', {
      user: this.userDetails,
      items: this.cartItems,
      total: this.getTotalPrice(),
      payment: this.paymentMethod,
    });
    // Clear cart after order is placed
    this.cartItems = [];
    this.userDetails = {
      name: '',
      email: '',
      address: '',
    };
    this.route.navigate(['/dashboard']);
  }
}
