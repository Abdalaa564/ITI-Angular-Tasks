import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProducts {
  
  constructor(private _http: HttpClient) {}
  
  private ProductsHttp: string = 'https://dummyjson.com/products';

  getAllProducts(): Observable<any> {
    return this._http.get(this.ProductsHttp);
  }

  getProductById(id: number): Observable<any> {
    return this._http.get(`${this.ProductsHttp}/${id}`);
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

}
