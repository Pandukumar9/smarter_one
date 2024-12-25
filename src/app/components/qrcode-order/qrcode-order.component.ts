import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeComponent } from 'angularx-qrcode';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-qrcode-order',
  imports: [QRCodeComponent,MatIconModule],
  templateUrl: './qrcode-order.component.html',
  styleUrl: './qrcode-order.component.scss'
})
export class QrcodeOrderComponent {

  myAngularxQrCode: string = 'www.google.com';
  qrCodeDownloadLink: string = '';

  constructor() {
    // You can set the QR code URL dynamically based on your logic
    this.qrCodeDownloadLink = this.generateQRCodeLink(this.myAngularxQrCode);
  }

  onChangeURL(url: any) {
    this.qrCodeDownloadLink = url;
  }

  // Function to trigger the QR code download
  downloadQRCode() {
    const link = document.createElement('a');
    link.href = this.qrCodeDownloadLink;
    link.download = 'qrcode.png'; // Specify the file name
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Simulate a click event to trigger the download
    document.body.removeChild(link); // Clean up by removing the link element
  }

  private generateQRCodeLink(data: string): string {
    // Logic to generate the download URL for QR code image (if needed)
    return data;
  }
}
