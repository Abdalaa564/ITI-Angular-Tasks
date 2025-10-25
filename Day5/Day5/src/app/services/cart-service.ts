import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/icategory';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Iproduct) {
    const existing = this.cartItems.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(i => i.product.id !== productId);
    this.cartSubject.next(this.cartItems);
  }

  increaseQty(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity++;
      this.cartSubject.next(this.cartItems);
    }
  }

  decreaseQty(productId: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else {
      this.removeFromCart(productId);
    }
    this.cartSubject.next(this.cartItems);
  }

  getTotal() {
    return this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  getCount() {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
}
