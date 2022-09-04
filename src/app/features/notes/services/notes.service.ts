import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LogInComponent } from '../../auth/log-in/log-in.component';
import { AccountService } from '../../auth/services/account.service';
import { Note, NoteAPI } from '../note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];
  currentUserID!: number;
  private Url$ = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    // const currentUserId = localStorage.getItem('id');
    // const currentUserId = this.accountService.userValue.id;
    // console.log(currentUserId);
    // if (currentUserId) this.currentUserID = +currentUserId;

    this.get$();
  }

  getById$(id: number) {
    return this.http.get<Note>(`${this.Url$}notes/${id}`);
  }

  // don't have this
  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    this.currentUserID = JSON.parse(localStorage.getItem('id')!);
    note.userId = this.currentUserID;
    return this.http.post(`${this.Url$}notes`, { note });
  }

  update$(id: number, body: NoteAPI) {
    this.currentUserID = JSON.parse(localStorage.getItem('id')!);
    body.note.userId = this.currentUserID;
    return this.http.put(`${this.Url$}notes/${id}`, body);
  }

  get$() {
    this.currentUserID = JSON.parse(localStorage.getItem('id')!);
    return this.http
      .get<NoteAPI[]>(`${this.Url$}notes`)
      .pipe(
        map((v) =>
          v.filter((n: NoteAPI) => n?.note?.userId == this?.currentUserID)
        )
      );
  }

  delete$(id: number) {
    return this.http.delete(`${this.Url$}notes/${id}`);
  }
}
