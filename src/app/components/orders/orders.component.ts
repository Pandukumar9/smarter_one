import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  private socket: any;
  restaurantId: number = 1;  // Example restaurant ID
  menuItems: any[] = [];
  selectedItems: any[] = [];
  customerName: string = '';
  customerPhone: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.socket = io('http://localhost:5000');

    this.socket.on('order-notification', (order: any) => {
      console.log('New order notification:', order);
    });

    // Fetch menu items
    this.http.get(`http://localhost:5000/api/menu/${this.restaurantId}`).subscribe((data: any) => {
      this.menuItems = data;
    });
  }

  placeOrder() {
    const orderDetails = {
      customerName: this.customerName,
      customerPhone: this.customerPhone,
      items: this.selectedItems,
    };

    this.http.post('http://localhost:5000/api/orders', orderDetails).subscribe(response => {
      console.log('Order placed:', response);
      this.socket.emit('new-order', orderDetails);  // Send order notification to server
    });
  }

  toggleItemSelection(itemId: number) {
    const index = this.selectedItems.indexOf(itemId);
    if (index === -1) {
      this.selectedItems.push(itemId);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }
}
