import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map } from 'rxjs';
import { UserChangeService } from 'src/app/shared/services/user-change.service';
import { Note, NoteAPI } from '../interfaces/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];
  currentUserID!: number;
  private Url$ = 'http://localhost:3000/';

  constructor(
    private http: HttpClient,
    private userChangeService: UserChangeService
  ) {
    this.userChangeService.userChange
      .pipe(catchError(() => EMPTY))
      .subscribe((id) => {
        this.currentUserID = id;
      });
  }

  getById$(id: number) {
    return this.http.get<Note>(`${this.Url$}notes/${id}`);
  }

  // don't have this
  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    note.userId = this.currentUserID;
    return this.http.post(`${this.Url$}notes`, { note });
  }

  update$(id: number, body: NoteAPI) {
    body.note.userId = this.currentUserID;
    return this.http.put(`${this.Url$}notes/${id}`, body);
  }

  get$() {
    this.currentUserID = JSON.parse(localStorage.getItem('id')!);
    return this.http.get<NoteAPI[]>(`${this.Url$}notes`).pipe(
      map((v) =>
        v.filter((n: NoteAPI) => n?.note?.userId == this?.currentUserID)
      ),
      catchError(() => EMPTY)
    );
  }

  delete$(id: number) {
    return this.http.delete(`${this.Url$}notes/${id}`);
  }
}
