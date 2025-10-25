import { Register } from './components/register/register';
import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Notfound } from './components/notfound/notfound';
import { ProductDetails } from './components/product-details/product-details';
import {  UserAuthComponent } from './components/user-auth/user-auth';
import { CartPage } from './components/cart-page/cart-page';

export const routes: Routes = [
    {path: '', component : Products, title: 'Product'},
    {path: 'products/:id', component : ProductDetails, title: 'ProductDetails'},
    {path: 'user-auth', component : UserAuthComponent, title: 'UserAuth'},
    {path: 'register', component : Register, title: 'register'},
    { path: 'cart', component: CartPage, title: 'Cart' },
    {path: '**', component: Notfound, title: '404'}
];
