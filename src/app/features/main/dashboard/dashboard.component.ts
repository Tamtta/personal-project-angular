import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogInComponent } from '../../auth/log-in/log-in.component';
import { AccountService } from '../../auth/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lastIndex = localStorage.getItem('username')?.lastIndexOf('"');
  username = localStorage.getItem('username')?.substring(1, this.lastIndex);
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  logOut() {
    this.accountService.logout();
  }
}
