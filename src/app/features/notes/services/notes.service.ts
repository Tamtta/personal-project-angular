import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Note } from '../note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];

  // if I change methods
  // private Url$ = 'http://localhost:3000/';
  // private noteSubject$!: Subject<Note>;
  // public note$!: Observable<Note>;

  constructor(private router: Router, private http: HttpClient) {
    // this.noteSubject$ = new Subject<Note>();
    // this.note$ = this.noteSubject$.asObservable();
  }

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  // don't have this
  getId(note: Note) {
    return this.notes.indexOf(note);
  }

  add(note: Note) {
    let newNote = this.notes.push(note);
    let index = newNote - 1;
    return index;
  }

  update(id: number, title: string, body: string) {
    let note = this.notes[id];
    note.title = title;
    note.body = body;
  }

  delete(id: number) {
    this.notes.splice(id, 1);
  }

  // add$(note: Note) {
  //   return this.http.post(`${this.Url$}notes`, note);
  // }

  // get$(id: string): Observable<Note> {
  //   return this.http.get<Note>(`${this.Url$}notes/${id}`);
  // }

  // getAll$(): Observable<Note[]> {
  //   return this.http.get<Note[]>(`${this.Url$}notes`);
  // }

  // update$(id: string, params: Note) {
  //   return this.http.put(`${this.Url$}notes/${id}`, params);
  // }

  // delete$(id: string) {
  //   return this.http.delete(`${this.Url$}notes/${id}`);
  // }
}
