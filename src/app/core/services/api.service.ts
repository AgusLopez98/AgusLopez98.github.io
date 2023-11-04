import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private ConsumoApi: string = 'https://dummyjson.com/products';

  private baseURL: string = 'http://localhost:3000'

  //!Auth
  public registerToApiService(user: User):Observable<boolean>{
    return this.http.post<boolean>(`${this.baseURL}/users`, user).pipe(
      map(resp=> {return true}),
      catchError(error=> of(false))
    )
  }
}
