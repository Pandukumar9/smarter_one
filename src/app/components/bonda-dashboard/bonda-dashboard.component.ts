import { Component } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bonda-dashboard',
  imports: [FoodCardComponent,NgFor],
  templateUrl: './bonda-dashboard.component.html',
  styleUrl: './bonda-dashboard.component.scss'
})
export class BondaDashboardComponent {
  bondas = [
    {
      id: 1,
      name: 'Aloo Bonda',
      description: 'Deep-fried snack made with mashed spiced potatoes coated in gram flour.',
      price: 50,
      images: [
        'bonda1.webp',
        'bonda2.webp',
        'bonda3.jpg'
      ]
    },
    {
      id: 2,
      name: 'Mysore Bonda',
      description: 'Crispy and fluffy bonda made with all-purpose flour and yogurt.',
      price: 60,
      images: [
        'bonda1.webp',
        'bonda2.webp',
        'bonda3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Sweet Bonda',
      description: 'Delicious sweet bonda filled with coconut and jaggery.',
      price: 70,
      images: [
        'bonda1.webp',
        'bonda2.webp',
        'bonda3.jpg'
      ]
    }
  ];
}
