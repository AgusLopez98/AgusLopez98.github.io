import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private ConsumoApi: string = 'https://dummyjson.com/products';

  public getProductsFromAPI(): Observable<Product[]>{
    return this.http.get<Product[]>(this.ConsumoApi)
  }

}
