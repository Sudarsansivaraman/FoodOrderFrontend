import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './guards/auth.guard';

// All application routes — pre-configured for all modules
export const routes: Routes = [
  // Default: redirect to menu
  { path: '', redirectTo: 'menu', pathMatch: 'full' },

  // Auth routes (Rubesh)
  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/auth/register/register').then(m => m.RegisterComponent)
  },

  // Menu routes (Hariharan)
  {
    path: 'menu',
    loadComponent: () =>
      import('./components/menu/menu-list/menu-list').then(m => m.MenuListComponent)
  },
  {
    path: 'menu/:itemId',
    loadComponent: () =>
      import('./components/menu/menu-detail/menu-detail').then(m => m.MenuDetailComponent)
  },

  // Admin routes (Hariharan) — protected by admin guard
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/admin/admin-dashboard/admin-dashboard').then(m => m.AdminDashboardComponent),
    canActivate: [adminGuard]
  },
  {
    path: 'admin/item/add',
    loadComponent: () =>
      import('./components/admin/item-form/item-form').then(m => m.ItemFormComponent),
    canActivate: [adminGuard]
  },
  {
    path: 'admin/item/edit/:itemId',
    loadComponent: () =>
      import('./components/admin/item-form/item-form').then(m => m.ItemFormComponent),
    canActivate: [adminGuard]
  },
  {
    path: 'admin/category',
    loadComponent: () =>
      import('./components/admin/category-form/category-form').then(m => m.CategoryFormComponent),
    canActivate: [adminGuard]
  },

  // Cart route (Nithish Khanna) — protected by auth guard
  {
    path: 'cart',
    loadComponent: () =>
      import('./components/cart/cart/cart').then(m => m.CartComponent),
    canActivate: [authGuard]
  },

  // Checkout route (Nithish Khanna) — protected by auth guard
  {
    path: 'checkout',
    loadComponent: () =>
      import('./components/order/checkout/checkout').then(m => m.CheckoutComponent),
    canActivate: [authGuard]
  },

  // Order History routes (Sudharsan) — protected by auth guard
  {
    path: 'orders',
    loadComponent: () =>
      import('./components/history/order-history/order-history').then(m => m.OrderHistoryComponent),
    canActivate: [authGuard]
  },
  {
    path: 'orders/:orderId',
    loadComponent: () =>
      import('./components/history/order-detail/order-detail').then(m => m.OrderDetailComponent),
    canActivate: [authGuard]
  },

  // Wildcard: redirect unknown paths to menu
  { path: '**', redirectTo: 'menu' }
];
