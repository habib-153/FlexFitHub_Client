export interface TProduct {
  _id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  image: string;
}

export type TOrder = {
  userInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: string;
  };
  cartItem: ICartItem[];
};

export type TCheckoutForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
};
interface ICartItem extends TProduct {
  quantity: number;
}

export type TCartInitialState = {
  items: ICartItem[];
};

export type TCategoryInitialState = {
  category: string;
};

export type TFilterInitialState = {
  searchTerm: string;
  sort: string;
  categories: string[];
};
