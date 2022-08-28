import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, first, map, tap } from 'rxjs';
import { IUser } from '../auth.interface';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  users: IUser[] = [];
  userLogged: boolean = true;
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
      username: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9-]+$/)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/),
        ],
      ],
    });

    this.getUsers();
  }

  public getUsers() {
    this.accountService
      .getAll()
      .pipe(tap((response) => this.usersSubject.next((this.users = response))))
      .subscribe((res) => console.log(res));
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const index1 = this.users.findIndex(
      (p) => p.username == this.form.value.username
    );
    const usernameIndex = this.users[index1];

    const index2 = this.users.findIndex(
      (p) => p.password == this.form.value.password
    );
    const usernamePass = this.users[index2];

    if (index1 == index2) {
      this.accountService
        .getById(usernamePass.id)
        .pipe(
          map((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            console.log(localStorage);
            this.router.navigate(['../dashboard']);
          })
        )
        .subscribe();
    } else {
      this.userLogged = false;
    }
  }
}
