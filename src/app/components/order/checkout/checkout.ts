import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { PlaceOrderDto } from '../../../models/order.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {
  loading: boolean = false;
  error: string | null = null;
  success: boolean = false;
  orderId: number | null = null;

  constructor(private orderService: OrderService, private router: Router) {}

  placeOrder(): void {
    this.loading = true;
    this.error = null;
    
    const dto: PlaceOrderDto = {}; // Empty placeholder

    this.orderService.placeOrder(dto).subscribe({
      next: (order) => {
        this.loading = false;
        this.success = true;
        this.orderId = order.orderId;
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || 'Failed to place order';
      }
    });
  }

  viewOrderHistory(): void {
    this.router.navigate(['/history']);
  }
}
