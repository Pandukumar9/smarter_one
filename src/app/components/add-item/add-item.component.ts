import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  breakfastCategories: any[] = [
    {
      name: 'South Indian',
      icon: 'bi-egg-fried',
      items: [
        {
          name: 'Idly',
          description: 'Soft and fluffy steamed rice cakes served with chutney and sambar.',
          price: 50,
          image: 'assets/idly.jpg'
        },
        {
          name: 'Dosa',
          description: 'Crispy rice pancake served with chutney and sambar.',
          price: 70,
          image: 'assets/dosa.jpg'
        }
      ]
    }
  ];

  categoryForm: FormGroup;
  itemForms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required]
    });

    this.initializeItemForms();
  }

  initializeItemForms() {
    this.breakfastCategories.forEach(() => {
      this.itemForms.push(
        this.fb.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          price: [null, [Validators.required, Validators.min(1)]],
          image: ['', Validators.required]
        })
      );
    });
  }

  addCategory() {
    const newCategory = this.categoryForm.value;
    newCategory.items = [];
    this.breakfastCategories.push(newCategory);

    // Add a new reactive form for items in this category
    this.itemForms.push(
      this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: [null, [Validators.required, Validators.min(1)]],
        image: ['', Validators.required]
      })
    );

    // Reset the category form
    this.categoryForm.reset();
  }

  addItem(categoryIndex: number) {
    const newItem = this.itemForms[categoryIndex].value;
    this.breakfastCategories[categoryIndex].items.push(newItem);

    // Reset the item form for this category
    this.itemForms[categoryIndex].reset();
  }

  payWithGPay() {
    // Define the UPI payment parameters
    const upiID = 'merchant@upi'; // Replace with your merchant UPI ID
    const payeeName = 'MerchantName'; // Replace with your payee/merchant name
    const transactionID = 'TXN12345';
    const referenceID = 'REF12345';
    const transactionNote = 'Payment for Order #123';
    const amount = '100.00'; // Amount to be paid
    const currency = 'INR';

    // Construct the UPI deep link
    const upiLink = `upi://pay?pa=${upiID}&pn=${payeeName}&tid=${transactionID}&tr=${referenceID}&tn=${transactionNote}&am=${amount}&cu=${currency}`;

    // Redirect to the UPI app
    window.location.href = upiLink;
  }
}
