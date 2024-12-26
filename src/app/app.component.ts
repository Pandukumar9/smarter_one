import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './components/common-header/common-header.component';
import { CommonFooterComponent } from './components/common-footer/common-footer.component';
import { CommonSidebarComponent } from './components/common-sidebar/common-sidebar.component';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,CommonHeaderComponent,CommonFooterComponent,CommonSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  title = 'smart_one';
  url2='www.google.com';
  constructor(private api:ApiService){
    // this.myAngularxQrCode = 'Your QR code data string';
    this.myAngularxQrCode = `${this.url2}`;
  }

  isstyle:boolean=true;
  isstyle2:boolean=true;

  ngOnInit() {
this.api.getAct().subscribe(res => {
  console.log(res)
})
  }

  addAcct(){
    const obj = {
      name: 'soumya',
      type: 'dmat',
      balance: 1000
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

  @Input() qrValue: string = '';

  // constructor(private elementRef: ElementRef) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['qrValue'] && this.qrValue) {
  //     this.generateQRCode();
  //   }
  // }

  // generateQRCode() {
  //   const canvas = this.elementRef.nativeElement.querySelector('canvas');
  //   QRCode.toCanvas(canvas, this.qrValue, { width: 200 }, (error) => {
  //     if (error) {
  //       console.error('Error generating QR code:', error);
  //     }
  //   });
  // }

  warehouses = [
    { name: 'sample2', type: 'Cold', area: 'Al Ain', price: 20.0, verification: 'Under Process' },
    { name: 'sample0909', type: 'Ambient', area: 'Dubai Metropolitan Area', price: 30.0, verification: 'Under Process' }
  ];

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";


  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
