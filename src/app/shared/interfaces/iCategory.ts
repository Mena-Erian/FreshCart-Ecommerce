export interface ICategoryRoot {
  results: number;
  metadata: IMetadata;
  data: ICategory[];
}
export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
export interface IMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}
export interface IspacificCateg extends ICategory {
  data: ICategory;
}
