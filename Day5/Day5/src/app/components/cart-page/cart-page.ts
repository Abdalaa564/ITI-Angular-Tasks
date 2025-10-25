import { Component, OnInit } from '@angular/core';
import { cart, CartItem, priceSummary } from '../../models/icategory';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
 cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => this.cartItems = items);
  }

  increaseQty(id: number) {
    this.cartService.increaseQty(id);
  }

  decreaseQty(id: number) {
    this.cartService.decreaseQty(id);
  }

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id);
  }

  get total() {
    return this.cartService.getTotal();
  }

  get counter() {
    return this.cartService.getCount();
  }
}
