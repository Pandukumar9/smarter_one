import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DosaDashboardComponent } from './components/dosa-dashboard/dosa-dashboard.component';
import { IdlyDashboardComponent } from './components/idly-dashboard/idly-dashboard.component';
import { BondaDashboardComponent } from './components/bonda-dashboard/bonda-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { QrcodeOrderComponent } from './components/qrcode-order/qrcode-order.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BeveragesComponent } from './components/beverages/beverages.component';
import { ContinentalComponent } from './components/continental/continental.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dosa', component:  DosaDashboardComponent},
  { path: 'idly', component: IdlyDashboardComponent },
  { path: 'bonda', component: BondaDashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'qrcode', component: QrcodeOrderComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'additem', component: AddItemComponent },
  { path: 'beverages', component: BeveragesComponent },
  { path: 'continent', component: ContinentalComponent },

  { path: '**', component: PageNotFoundComponent } // Wildcard route for 404 page
];
