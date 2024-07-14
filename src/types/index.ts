export interface TProduct {
  _id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  image: string;
}

interface ICartItem extends TProduct {
  quantity: number;
}

export type TCartInitialState = {
  items: ICartItem[];
}

export type TCategoryInitialState = {
  category: string 
}

export type TFilterInitialState = {
  searchTerm: string
  sort: string
  categories: string[]
}
