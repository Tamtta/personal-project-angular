import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IUser } from '../auth.interface';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private mainUrl = 'http://localhost:3000/';
  private userSubject: BehaviorSubject<IUser>;
  public user: Observable<IUser>;
  // public users: IUser[] = [];

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('user')!)
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): IUser {
    return this.userSubject.value;
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    // this.userSubject.next(null);
    this.router.navigate(['login']);
  }

  register(user: IUser) {
    return this.http.post(`${this.mainUrl}users`, user);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.mainUrl}users`);
  }

  getById(id: string) {
    return this.http.get<IUser>(`${this.mainUrl}users/${id}`);
  }

  // update(id, params) {
  //   return this.http.put(`${environment.apiUrl}/users/${id}`, params).pipe(
  //     map((x) => {
  //       // update stored user if the logged in user updated their own record
  //       if (id == this.userValue.id) {
  //         // update local storage
  //         const user = { ...this.userValue, ...params };
  //         localStorage.setItem('user', JSON.stringify(user));

  //         // publish updated user to subscribers
  //         this.userSubject.next(user);
  //       }
  //       return x;
  //     })
  //   );
  // }

  // delete(id: string) {
  //   return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(
  //     map((x) => {
  //       // auto logout if the logged in user deleted their own record
  //       if (id == this.userValue.id) {
  //         this.logout();
  //       }
  //       return x;
  //     })
  //   );
  // }
}
