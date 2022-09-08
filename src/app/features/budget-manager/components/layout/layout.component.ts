import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/features/auth/services/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  logOut() {
    this.accountService.logout();
  }
}
