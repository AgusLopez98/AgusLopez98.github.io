import { Product } from "./models";

export interface IProducts{
    id: number | null;
    title: string | null;
    description: string | null;
    price: number | null;
    brand: string | null;
    category: string | null;
    thumbnail: string | null;
    images: Array<string> | null;
}

export interface IUser{
    id: number | null;
    username: string | null;
    mail: string | null;
    password: string | null;
    cart: Array<Product> | null;
}

