import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { MenuListComponent } from './components/menu/menu-list/menu-list';
import { MenuDetailComponent } from './components/menu/menu-detail/menu-detail';
import { CartComponent } from './components/cart/cart/cart';
import { CheckoutComponent } from './components/order/checkout/checkout';
import { OrderHistoryComponent } from './components/history/order-history/order-history';
import { OrderDetailComponent } from './components/history/order-detail/order-detail';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard';
import { CategoryFormComponent } from './components/admin/category-form/category-form';
import { ItemFormComponent } from './components/admin/item-form/item-form';
import { authGuard, adminGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuListComponent },
  { path: 'menu/:id', component: MenuDetailComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },
  { path: 'orders', component: OrderHistoryComponent, canActivate: [authGuard] },
  { path: 'orders/:id', component: OrderDetailComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [adminGuard] },
  { path: 'admin/category/new', component: CategoryFormComponent, canActivate: [adminGuard] },
  { path: 'admin/category/:id', component: CategoryFormComponent, canActivate: [adminGuard] },
  { path: 'admin/item/new', component: ItemFormComponent, canActivate: [adminGuard] },
  { path: 'admin/item/:id', component: ItemFormComponent, canActivate: [adminGuard] },
  { path: '**', redirectTo: 'menu' },
];
