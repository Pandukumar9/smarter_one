import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule,NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Contact Form Data:', this.contact);
      alert('Thank you for reaching out! We will get back to you soon.');
      contactForm.reset(); // Reset the form after submission
    }
  }
}
