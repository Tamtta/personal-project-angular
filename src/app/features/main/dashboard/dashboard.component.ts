import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../auth/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  logOut() {
    this.accountService.logout();
  }
}
