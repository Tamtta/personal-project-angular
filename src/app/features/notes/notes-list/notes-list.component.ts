import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../auth/services/account.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}


}
