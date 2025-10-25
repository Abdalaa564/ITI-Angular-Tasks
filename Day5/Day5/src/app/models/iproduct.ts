export interface Iproduct {
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
}

export interface IReview {
  rating: number;
  comment: string;
  reviewerName: string;
}

export interface IproductResponse {
  products: Iproduct[];
  total: number;
  skip: number;
  limit: number;
}
 