import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private consumoJSON: string = '../../../assets/data/db-respaldoApi.json';

  public getProductsFromJSON(): Observable<{products: Product[]}>{
    return this.http.get<{products: Product[]}>(this.consumoJSON);
  }

}
