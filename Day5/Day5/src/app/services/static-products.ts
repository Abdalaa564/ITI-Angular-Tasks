import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct, IproductResponse } from '../models/iproduct';
import { cart } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticProducts {
    cartData = new EventEmitter<Iproduct[] | []>();

  constructor(private _http: HttpClient) {}
  
  private ProductsHttp: string = 'https://dummyjson.com/products';
  private CartHttp: string = 'https://dummyjson.com/carts';

  getAllProducts(): Observable<any> {
    return this._http.get<IproductResponse>(this.ProductsHttp);
  }

  getProductById(id: number): Observable<any> {
    return this._http.get<Iproduct>(`${this.ProductsHttp}/${id}`);
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    return this._http.post<Iproduct>(`${this.ProductsHttp}`, product);
  }

  updateProduct(id: number, newProduct: Iproduct): Observable<Iproduct> {
    return this._http.put<Iproduct>(`${this.ProductsHttp}/${id}`, newProduct);
  }

  deleteProduct(id: number): Observable<unknown> {
    return this._http.delete(`${this.ProductsHttp}/${id}`);
  }

  currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this._http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
  }

  addToCart(userId: number, productId: number, quantity: number): Observable<any> {
    return this._http.post(`${this.CartHttp}/add`, {
      userId,
      products: [
        {
          id: productId,
          quantity: quantity
        }
      ]
    });
  }

   getCartByUser(userId: number): Observable<cart> {
    return this._http.get<cart>(`${this.CartHttp}/user/${userId}`);
  }

}
