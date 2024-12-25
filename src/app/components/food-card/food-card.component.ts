import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-food-card',
  imports: [NgFor],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent implements OnInit{
  @Input() item: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
     this.item.quantity = 0;
  }

  // Increment quantity
  incrementQuantity(item: any) {
    if (!item.quantity) {
      item.quantity = 0;
    }
    item.quantity++;
  }

  // Decrement quantity
  decrementQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity--;
    }
  }

  // Add item to cart
  addToCart(item: any) {
    if (item.quantity > 0) {
      this.cartService.addToCart({ ...item });
      item.quantity = 0; // Reset the quantity after adding to cart
    }
  }
}
