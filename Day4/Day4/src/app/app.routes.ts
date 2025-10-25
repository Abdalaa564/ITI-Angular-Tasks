import { Routes } from '@angular/router';
import { Products } from './components/products/products';

export const routes: Routes = [
    {path: "", component:Products, title: 'Home'}
    // {path: "**", component:Notfound, title: '404'}
];
