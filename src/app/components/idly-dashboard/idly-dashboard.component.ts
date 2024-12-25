import { Component } from '@angular/core';
import { FoodCardComponent } from '../food-card/food-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-idly-dashboard',
  imports: [FoodCardComponent,NgFor],
  templateUrl: './idly-dashboard.component.html',
  styleUrl: './idly-dashboard.component.scss'
})
export class IdlyDashboardComponent {
  idlies = [
    {
      id: 1,
      name: 'Steamed Idly',
      description: 'Soft and fluffy idlies served with chutney and sambar.',
      price: 60,
      images: [
        'assets/images/steamed-idly-1.jpg',
        'assets/images/steamed-idly-2.jpg',
        'assets/images/steamed-idly-3.jpg'
      ]
    },
    {
      id: 2,
      name: 'Rava Idly',
      description: 'A flavorful variation made with semolina and spices.',
      price: 80,
      images: [
        'assets/images/rava-idly-1.jpg',
        'assets/images/rava-idly-2.jpg',
        'assets/images/rava-idly-3.jpg'
      ]
    },
    {
      id: 3,
      name: 'Fried Idly',
      description: 'Crispy fried idly cubes tossed with spices and curry leaves.',
      price: 70,
      images: [
        'assets/images/fried-idly-1.jpg',
        'assets/images/fried-idly-2.jpg',
        'assets/images/fried-idly-3.jpg'
      ]
    }
  ];
}
