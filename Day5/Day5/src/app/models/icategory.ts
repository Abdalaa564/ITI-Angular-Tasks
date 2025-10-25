import { Iproduct } from "./iproduct";

export interface Icategory {
}


export interface cart{
  carts: any;
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage : number;
  rating: number;
  stock: number;
  tags? : string[];
  brand : string;
  sku? : string;
  thumbnail: string;
  images: string[];
  reviews? : IReview[];
  quantity:undefined | number,
}

export interface IReview {
  rating: number;
  comment: string;
  reviewerName: string;
}

export interface priceSummary{
  price:number,
  discount:number,
  tax:number,
  delivery:number,
  total:number
}

export interface signUp {
  name: string;
  email: string;
  password: string;
}
export interface login {
  email: String;
  password: String;
}

export interface CartItem {
  product: Iproduct;
  quantity: number;
}