import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private data: any;
  private carrito: Array<any> = [];
  private producto: any;

  public setData(data: any){
    this.data = data;
  }

  public getData(){
    return this.data;
  }

  public setEmpty(){
    this.carrito = [];
  }

  public setCarrito(producto: any){
    this.carrito.push(producto)
  }

  public getCarrito(){
    return this.carrito;
  }

  public setProducto(producto: any){
    this.producto = producto;
  }

  public getProducto(){
    return this.producto;
  }
}
