import { Card, Product } from "./models";

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

export interface ICard {
    number: number | null;
    security_code: number | null;
    expiration: string | null;
}

export interface IUser{
    id: number | null;
    name: string | null;
    lastName: string | null;
    mail: string | null;
    password: string | null;
    province: string | null;
    city: string | null;
    street: number | null;
    dni: number | null;
    card: Array<Card> | null;
    cart: Array<Product> | null;
}

