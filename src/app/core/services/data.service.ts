import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any;
  private carrito: Array<any> = [];

  public setData(data: any){
    this.data = data;
  }

  public getData(){
    return this.data;
  }

  public setProducto(producto: any){
    this.carrito.push(producto)
  }

  public getCarrito(){
    return this.carrito;
  }
}
