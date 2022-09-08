import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Note, NoteAPI } from '../interfaces/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent implements OnInit {
  filtered: Array<any> = [];
  notes: Array<NoteAPI> = [];
  @ViewChild('searchNote') ref!: ElementRef<HTMLInputElement>;

  constructor(
    private noteService: NotesService,
    private http: HttpClient,
    private changeDet: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadNotes();
    this.search('');
  }

  loadNotes() {
    this.noteService.get$().subscribe((notes) => {
      this.notes = notes;
      this.changeDet.markForCheck();
      this.search('');
    });
  }

  URL(note: Note) {
    let id = this.noteService.getId(note);
    return id.toString();
  }

  toDetails(id: number) {
    this.router.navigate(['dashboard/notes/', id]);
  }

  delete(id: number) {
    this.noteService
      .delete$(id)
      .pipe(catchError(() => EMPTY))
      .subscribe((t) => this.loadNotes());
  }

  search(query: string) {
    query = query.toLowerCase().trim();
    let results: NoteAPI[] = [];
    let terms: string[] = query.split(' ');
    terms = this.removeDub(terms);
    terms.forEach((term) => {
      let result: NoteAPI[] = this.match(term);
      results = [...results, ...result];
    });

    let unique = this.removeDub(results);
    this.filtered = unique;
  }

  removeDub(arr: Array<any>): Array<string> {
    let unique: Set<string> = new Set<string>();
    arr.forEach((value: string) => unique.add(value));
    return Array.from(unique);
  }

  match(query: string): NoteAPI[] {
    query = query.toLowerCase().trim();
    let match = this.notes.filter((note) => {
      if (note.note.title && note.note.title.toLowerCase().includes(query)) {
        return true;
      }

      if (note.note.body && note.note.body.toLowerCase().includes(query)) {
        return true;
      }

      return false;
    });
    return match;
  }

  post(note: Note[]) {
    return this.http.post(`http://localhost:3000/notes`, note);
  }
}
