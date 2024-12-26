import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-sidebar',
  imports: [RouterLinkActive,RouterLink,NgFor,MatDialogModule,MatCardModule,NgLabelTemplateDirective,NgOptionTemplateDirective,NgSelectComponent,FormsModule],
  templateUrl: './common-sidebar.component.html',
  styleUrl: './common-sidebar.component.scss'
})
export class CommonSidebarComponent implements OnInit {
  constructor(private dialog:MatDialog){}
  ngOnInit() {
     // Add a dynamic link, e.g., based on user permissions
  // this.addLink({
  //   label: 'Special Offers',
  //   path: '/offers',
  //   icon: 'bi-gift'
  // });

  }
  sidebarVisible: boolean = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    const sidebarElement = document.getElementById('sidebar');
    if (this.sidebarVisible) {
      sidebarElement?.classList.remove('d-none');
    } else {
      sidebarElement?.classList.add('d-none');
    }
  }

  menuItems = [
    {
      label: 'Home',
      path: '/dashboard',
      icon: 'bi-house-door'
    },
    {
      label: 'Dosa Items',
      path: '/dosa',
      icon: 'bi-egg-fried'
    },
    {
      label: 'Idly Items',
      path: '/idly',
      icon: 'bi-disc'
    },
    {
      label: 'Bonda Items',
      path: '/bonda',
      icon: 'bi-cup-hot'
    },
    {
      label: 'QR Code',
      path: '/qrcode',
      icon: 'bi-chat-dots'
    }
  ];

  // Add or remove links dynamically as needed
  addLink(newLink: { label: string; path: string; icon: string }) {
    this.menuItems.push(newLink);
  }

  addNew(template:any){
    const dialogref = this.dialog.open(template,{
      width: '400px',
      height : '400px'
    });

    dialogref.afterClosed().subscribe(res => {
      console.log(res,'res');
    })
  }

  items = [
    { id: 1, name: 'South Indian' , route:'south' ,icon: 'bi-disc'},
    { id: 1, name: 'North Indian' , route:'north' ,icon: 'bi-disc'},
    { id: 1, name: 'Desserts' , route:'dessert' ,icon: 'bi-disc'},
    { id: 1, name: 'Beverages' , route:'beverages' ,icon: 'bi-disc'},
    { id: 2, name: 'Bonda ' ,route:'bonda',icon: 'bi-cup-hot'},
    { id: 3, name: 'Dosa' ,route:'dosa' , icon: 'bi-egg-fried'},
    { id: 1, name: 'Beverages' , route:'beverages' },
    { id: 2, name: 'Continent' ,route:'continent'},
    { id: 3, name: 'Dosa' ,route:'dosa'}
  ];

  selectedItem: any;

  submitSelection() {
    if (this.selectedItem) {
      alert(`You selected: ${this.selectedItem.name}`);
      // You can also perform additional actions here (e.g., send the selection to an API or save it)
    } else {
      alert('Please select a fruit');
    }
  }

}
