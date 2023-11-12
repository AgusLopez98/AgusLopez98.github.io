import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private baseURL: string = 'http://localhost:3000'

  //registrar usuario
  public registerToApiService(user: User): Observable<boolean> {
    // Verifico con un get si el mail del usuario a registrar ya existe en la api
    return this.http.get<User[]>(`${this.baseURL}/users?email=${user.email}`).pipe(
      switchMap(existingUsers => {
        if (existingUsers && existingUsers.length > 0) {
          // El mail ya existe en la base de datos, retorna un observable con false
          return of(false);
        } else {
          // El mail no existe, entonces se registra
          return this.http.post<boolean>(`${this.baseURL}/users`, user).pipe(
            map(resp => {return true}),
            catchError(error => of(false))
          );
        }
      }),
      catchError(error => of(false))
    );
  }

  //loguear usuario
  public getUserByCredentials(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`)
  }

  //modificar usuario
  public updateUserToApi(user: User): Observable<boolean> {
    return this.http.patch<boolean>(`${this.baseURL}/users/${user.id}`, user).pipe(
      map(resp => { return true }),
      catchError(error => of(false))
    )
  }

  //elimina tarjeta del perfil usuario
  public deleteCardToApi(id: number):Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseURL}/cards/${id}`).pipe(
      map(resp=>{return true}),
      catchError(error=> of(false))
      )
  }

}
