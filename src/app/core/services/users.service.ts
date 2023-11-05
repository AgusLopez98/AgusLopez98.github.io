import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private baseURL: string = 'http://localhost:3000'

  //registrar usuario
  public registerToApiService(user: User):Observable<boolean>{
    return this.http.post<boolean>(`${this.baseURL}/users`, user).pipe(
      map(resp=> {return true}),
      catchError(error=> of(false))
    )
  }

  //loguear usuario
  public getUserByCredentials(email: string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`)
  }

  //modificar usuario
  public updateUserToApi(user: User): Observable<boolean>{
    return this.http.patch<boolean>(`${this.baseURL}/users/${user.id}`,user).pipe(
      map(resp => {return true}),
      catchError(error => of(false))
    )
  }

}
