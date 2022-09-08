import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, EMPTY, map, tap, throwError } from 'rxjs';
import { IUser } from '../interfaces/auth.interface';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  users: IUser[] = [];
  incorrectPassw: boolean = false;
  userExist: boolean = true;
  userID!: number;
  public usersSubject: BehaviorSubject<IUser[]> = new BehaviorSubject(
    <IUser[]>[]
  );

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.getUsers();
  }

  public getUsers() {
    this.accountService
      .getAll()
      .pipe(
        tap((response) => this.usersSubject.next((this.users = response))),
        catchError(() => EMPTY)
      )
      .subscribe();
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    let index1;
    let usernameIndex;
    let index2;
    let usernamePass: IUser;

    if (
      this.users.findIndex((p) => p.username == this.form.value.username) == -1
    ) {
      this.userExist = false;
    } else if (
      this.users.findIndex((p) => p.password == this.form.value.password) == -1
    ) {
      this.incorrectPassw = true;
    } else if (
      this.users.findIndex((p) => p.username == this.form.value.username) ==
      this.users.findIndex((p) => p.password == this.form.value.password)
    ) {
      index1 = this.users.findIndex(
        (p) => p.username == this.form.value.username
      );
      usernameIndex = this.users[index1];

      index2 = this.users.findIndex(
        (p) => p.password == this.form.value.password
      );
      usernamePass = this.users[index2];
      this.accountService
        .getById(usernamePass.id || usernameIndex.id)
        .pipe(
          map((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('username', JSON.stringify(user.username));
            localStorage.setItem('id', JSON.stringify(user.id));

            this.router.navigate(['../dashboard']);
          }),
          catchError((err: HttpErrorResponse) => {
            if (err.status == 400) {
              alert(err.statusText);
            } else if (err.status == 404) {
              alert(err.statusText);
            }

            return throwError(() => new Error('err.statusText'));
          })
        )
        .subscribe();
    } else {
      alert('something is wrong');
    }
  }
}
