import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from '../../auth/password-validator';
import { AccountService } from '../../auth/services/account.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  // imports: [],
})
export class UserComponent implements OnInit {
  hide = true;
  updateForm!: FormGroup;
  updated: boolean = false;
  id: string = JSON.parse(localStorage.getItem('id')!);

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
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
        confirm: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/),
          ],
        ],
      },
      { validators: passwordValidator }
    );

    this.accountService
      .getById(this.id)
      .pipe()
      .subscribe((res) =>
        this.updateForm.setValue({
          name: res.name,
          username: res.username,
          mail: res.mail,
          password: '',
          confirm: '',
        })
      );
  }

  logOut() {
    this.accountService.logout();
  }

  update() {
    let update = {
      id: this.id,
      name: this.updateForm.value.name,
      mail: this.updateForm.value.mail,
      username: this.updateForm.value.username,
      password: this.updateForm.value.password,
      confirm: this.updateForm.value.confirm,
    };

    this.accountService.update(this.id, update).pipe().subscribe();

    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(update));
    localStorage.removeItem('username');
    localStorage.setItem('username', update.username);
    this.updated = true;
    this.updateForm.reset();
    console.log('updated', localStorage);
  }

  delete() {
    this.accountService.delete(this.id).subscribe(() => console.log('deleted'));
  }
}
