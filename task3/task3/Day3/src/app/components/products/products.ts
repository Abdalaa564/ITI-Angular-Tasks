import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';



@Component({
   selector: 'app-products',
  standalone: true,       
  imports: [FormsModule,CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']  
})
export class Products {
  products: Iproduct[];
 totalOrderPrice: number = 0;
  categoryID: number = 0; // Two-way Binding
    constructor() {
    this.products = [
      {
        id: 1,
        title: 'Laptop Backpack 15 inch',
        price: 115.5,
        description: 'Durable everyday backpack with padded laptop sleeve and extra compartments.',
        category: "Men Fashion",
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
        rating: { rate: 4.2, count: 98 },
        stock: 6
      },
      {
        id: 2,
        title: 'Casual Slim T-Shirt',
        price: 22.3,
        description: 'Light, breathable, comfortable design.',
        category: "men's clothing",
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
        rating: { rate: 4.1, count: 259 },
        stock: 5
      },
      {
        id: 3,
        title: 'Cotton Jacket',
        price: 55.99,
        description: 'Warm jacket for cool weather, multi-use.',
        category: "men's clothing",
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
        rating: { rate: 4.7, count: 500 },
        stock: 3
      },
      {
        id: 4,
        title: 'Casual Slim Fit',
        price: 15.99,
        description: 'Simple casual shirt, fits well.',
        category: "men's clothing",
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3',
        rating: { rate: 2.1, count: 430 },
        stock: 0
      },
      {
        id: 5,
        title: "Naga Dragon Bracelet",
        price: 695,
        description: "Gold & silver dragon chain bracelet.",
        category: 'jewelery',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
        rating: { rate: 4.6, count: 400 },
        stock: 15
      },
      {
        id: 6,
        title: 'Solid Gold Petite Micropave',
        price: 168,
        description: 'Small elegant gold jewelry piece.',
        category: 'jewelery',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
        rating: { rate: 3.9, count: 70 },
        stock: 20
      },
      {
        id: 7,
        title: 'White Gold Princess Ring',
        price: 9.99,
        description: "Classic solitaire diamond ring.",
        category: 'jewelery',
        image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439',
        rating: { rate: 3, count: 400 },
        stock: 0
      },
      {
        id: 8,
        title: 'Rose Gold Owl Earrings',
        price: 10.99,
        description: 'Rose gold stainless steel earrings.',
        category: 'jewelery',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
        rating: { rate: 1.9, count: 100 },
        stock: 8
      },
      {
        id: 9,
        title: 'WD 2TB External HDD',
        price: 64,
        description: 'Portable high capacity hard drive.',
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3',
        rating: { rate: 3.3, count: 203 },
        stock: 3
      },
      {
        id: 10,
        title: 'SanDisk 1TB SSD',
        price: 109,
        description: 'High performance internal SSD.',
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
        rating: { rate: 2.9, count: 470 },
        stock: 3
      },
      {
        id: 11,
        title: 'Silicon Power 256GB SSD',
        price: 109,
        description: '3D NAND SSD with fast speeds.',
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439',
        rating: { rate: 4.8, count: 319 },
        stock: 0
      },
      {
        id: 12,
        title: 'WD 4TB Gaming Drive',
        price: 114,
        description: 'External drive optimized for gaming use.',
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        rating: { rate: 4.8, count: 400 },
        stock: 30
      }
    ];
    }
      addToCart(p: Iproduct): void {
        if (!p || p.stock === 0) return;
        this.totalOrderPrice += p.price;
        p.stock--;
      }
}
      
    

