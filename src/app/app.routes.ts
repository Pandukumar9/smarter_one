import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DosaDashboardComponent } from './components/dosa-dashboard/dosa-dashboard.component';
import { IdlyDashboardComponent } from './components/idly-dashboard/idly-dashboard.component';
import { BondaDashboardComponent } from './components/bonda-dashboard/bonda-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { QrcodeOrderComponent } from './components/qrcode-order/qrcode-order.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dosa', component:  DosaDashboardComponent},
  { path: 'idly', component: IdlyDashboardComponent },
  { path: 'bonda', component: BondaDashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'qrcode', component: QrcodeOrderComponent },
];
