import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-common-sidebar',
  imports: [RouterLinkActive,RouterLink],
  templateUrl: './common-sidebar.component.html',
  styleUrl: './common-sidebar.component.scss'
})
export class CommonSidebarComponent {
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
}
