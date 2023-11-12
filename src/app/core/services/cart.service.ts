import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Cart } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private baseURL: string = 'http://localhost:3000/carts';

  public addCartToApi(cart: Cart):Observable<boolean>{
    return this.http.post<boolean>(this.baseURL,cart).pipe(
      map(resp=>{return true}),
      catchError(error=> of(false))
    )
  }
}
