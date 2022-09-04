import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUser } from '../interfaces/auth.interface';
import { UserChangeService } from 'src/app/shared/services/user-change.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private mainUrl = 'http://localhost:3000/';
  private userSubject: BehaviorSubject<IUser>;
  public user: Observable<IUser>;
  // public users: IUser[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private userChangeService: UserChangeService
  ) {
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
    localStorage.removeItem('username');
    localStorage.removeItem('id');

    this.router.navigate(['login']);
    this.userChangeService.next(0);
  }

  register(user: IUser) {
    return this.http.post(`${this.mainUrl}users`, user);
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.mainUrl}users`);
  }

  getById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.mainUrl}users/${id}`).pipe(
      tap((user) => {
        this.userChangeService.next(+user.id);
      })
    );
  }

  update(id: string, params: IUser) {
    return this.http.put(`${this.mainUrl}users/${id}`, params);
  }

  delete(id: string) {
    this.logout();
    return this.http.delete(`${this.mainUrl}users/${id}`);
  }
}
