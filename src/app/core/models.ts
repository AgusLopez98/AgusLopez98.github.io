import { IProducts, IUser } from "./interfaces";

export class Product implements IProducts{
    id: number | null;
    title: string | null;
    description: string | null;
    price: number | null;
    brand: string | null;
    category: string | null;
    thumbnail: string | null;
    images: string[] | null;

    constructor(product?: any){
        this.id = product.id != null ? product.id: null;
        this.title = product.title != null ? product.title: null;
        this.description = product.description != null ? product.description: null;
        this.price = product.price != null ? product.price: null;
        this.brand = product.brand != null ? product.brand: null;
        this.category = product.category != null ? product.category: null;
        this.thumbnail = product.thumbnail != null ? product.thumbnail: null;
        this.images = product.images != null ? product.images: null;
    }
    
}

export class User implements IUser{
    id: number | null;
    username: string | null;
    mail: string | null;
    password: string | null;
    cart: Array<Product> | null;
    
    constructor(user?: any){
        this.id = user.id != null ? user.id: null;
        this.username = user.username != null ? user.username: null;
        this.mail = user.mail != null ? user.mail: null;
        this.password = user.password != null ? user.password: null;
        this.cart = user.cart != null ? user.cart : [];
    }
}