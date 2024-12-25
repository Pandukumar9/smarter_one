import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';

@Component({
  selector: 'app-dosa-dashboard',
  imports: [NgFor,FoodCardComponent],
  templateUrl: './dosa-dashboard.component.html',
  styleUrl: './dosa-dashboard.component.scss'
})
export class DosaDashboardComponent {
  dosas = [
    {
      id: 1,
      name: 'Masala Dosa',
      description: 'A crispy and savory dosa filled with a spicy potato filling.',
      price: 120,
      images: [
        'dosa1.jpg',
        'dosa2.jpg',
        'dosa3.jpg'
      ]
    },
    {
      id: 2,
      name: 'Plain Dosa',
      description: 'A simple yet delicious dosa served with chutneys and sambar.',
      price: 90,
      images: [
        'dosa1.jpg',
        'dosa2.jpg',
        'dosa3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Cheese Dosa',
      description: 'A modern twist with melted cheese for a delightful taste.',
      price: 150,
      images: [
        'dosa1.jpg',
        'dosa2.jpg',
        'dosa3.jpg'
      ]
    }
  ];
}
