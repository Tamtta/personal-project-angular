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
import { Note } from '../interfaces/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent implements OnInit {
  // notes$: Observable<any[]> | undefined;
  filtered: any[] = [];
  notes: any[] = [];
  @ViewChild('searchNote') ref!: ElementRef<HTMLInputElement>;

  constructor(
    private noteService: NotesService,
    private http: HttpClient,
    private changeDet: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.filtered = this.loadNotes();
    this.loadNotes();
    this.search('');
  }

  loadNotes() {
    // console.log('axali');
    this.noteService.get$().subscribe((notes) => {
      this.notes = notes;
      console.log('axali', this.notes);
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
    console.log('deleting...', id);
    this.noteService.delete$(id).subscribe((t) => this.loadNotes());
  }

  search(query: string) {
    query = query.toLowerCase().trim();
    let results: Note[] = [];
    let terms: string[] = query.split(' ');
    terms = this.removeDub(terms);
    terms.forEach((term) => {
      let result: Note[] = this.match(term);
      results = [...results, ...result];
    });

    let unique = this.removeDub(results);
    this.filtered = unique;
    // console.log(this.filtered);
    // this.match(results);
  }

  removeDub(arr: Array<any>): Array<string> {
    let unique: Set<string> = new Set<string>();
    arr.forEach((value) => unique.add(value));
    console.log(Array.from(unique), 'Hi');
    return Array.from(unique);
  }

  match(query: string): Note[] {
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
    // console.log('match', match);
    return match;
  }

  post(note: Note[]) {
    return this.http.post(`http://localhost:3000/notes`, note);
  }
}
