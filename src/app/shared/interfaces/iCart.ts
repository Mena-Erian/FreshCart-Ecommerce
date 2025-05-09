export interface ICartRoot {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: Data;
}

export interface Data {
  _id: string;
  cartOwner: string;
  products: Product2[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface Product2 {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface Product {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Category;
  ratingsAverage: number;
  id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

// ----
export interface ICartAddRoot {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: dataAdd;
}

interface dataAdd {
  _id: string;
  cartOwner: string;
  products: ProductAdd[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

interface ProductAdd {
  count: number;
  _id: string;
  product: string;
  price: number;
}
