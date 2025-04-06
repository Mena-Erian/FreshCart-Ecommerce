export interface IAllBrands {
  results: number;
  metadata: Metadata;
  data: IBrand[];
}
export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}
// -----------------------
export interface ISpacificBrand {
  data: IBrandDetails;
}
export interface IBrandDetails {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
