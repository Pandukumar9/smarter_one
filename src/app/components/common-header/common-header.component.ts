import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-common-header',
  imports: [NgFor,NgIf],
  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.scss'
})
export class CommonHeaderComponent {
  notifications: string[] = [
    'New user registered',
    'Order #1234 has been shipped',
    'You have a new message'
  ];
}
