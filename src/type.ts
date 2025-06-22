export interface ProductData {
    id: number
    no: string,
    name:string,
    collection: string,
    material: string[],
    description: string,
    images: string[],
    price: number,
    createAt: string,
    quantity: number
}


export interface ProductCartData {
  id: number;
  name: string;
  price: number;
  totalPrice: number;
  no: string;
  quantity: number;
  image: string;
  remainQuantity : number
}

export interface CheckoutProductData {
  name: string;
  totalPrice: number;
  no: string;
  quantity: number;
  image: string;
}

export interface QueryData {
  search: string;
  material: string[];
  maxPrice: number;
  minPrice: number;
  collection: string[];
  sortby: string;
}

export interface CartItem {
  id: number,
  quantity: number
}