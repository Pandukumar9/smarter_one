import { NgFor } from '@angular/common';
import { Component, OnInit, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';
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
export class CommonSidebarComponent implements OnInit{
  constructor(private api:ApiService){}
  sidebar_items:any;
  ngOnInit(): void {
    this.api.getAct().subscribe(res => {
      console.log(res)
      this.sidebar_items = res
    })
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
  selectItem(data:any){
    console.log(data)
  }
}
