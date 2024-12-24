import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { io } from 'socket.io-client';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'smart_one';

  constructor(private api:ApiService){}

  ngOnInit() {

  }

  addAcct(){
    const obj = {
      name: 'jaanse',
      type: 'saving',
      balance: 10000
    }
    this.api.postAct(obj).subscribe(res => {
      console.log(res,'res');
    })
  }

  // private socket: any;

  // ngOnInit() {
  //   this.socket = io('http://localhost:5000');

  //   this.socket.on('order-notification', (order:any) => {
  //     console.log('New order received:', order);
  //     // Handle order notification (e.g., update UI)
  //   });
  // }

  // data = {
  //   item: 'dosa',
  //   dosaname: 'Masala',
  //   quantity: 3,
  // }
  // // Function to emit new order to server
  // placeOrder(orderDetails: any) {
  //   this.socket.emit('new-order', orderDetails);
  // }
}
