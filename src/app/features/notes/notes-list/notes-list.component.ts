import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  filtered: Note[] = [];
  @ViewChild('searchNote') ref!: ElementRef<HTMLInputElement>;

  constructor(private noteService: NotesService, private http: HttpClient) {}

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
    // this.filtered = this.noteService.getAll();
    this.search('');
    console.log(this.notes, 'wee');
    // this.post(this.notes);
  }

  URL(note: Note) {
    let id = this.noteService.getId(note);
    return id.toString();
  }

  delete(note: Note) {
    let id = this.noteService.getId(note);
    console.log(typeof id);
    this.noteService.delete(id);
    this.search(this.ref.nativeElement.value);
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

    // this.sort(results);
  }

  removeDub(arr: Array<any>): Array<any> {
    let unique: Set<string> = new Set<string>();
    arr.forEach((value) => unique.add(value));
    return Array.from(unique);
  }

  match(query: string): Note[] {
    query = query.toLowerCase().trim();
    let match = this.notes.filter((note) => {
      if (note.title && note.title.toLowerCase().includes(query)) {
        return true;
      }

      if (note.body && note.body.toLowerCase().includes(query)) {
        return true;
      }

      return false;
    });

    return match;
  }

  post(note: Note[]) {
    return this.http.post(`http://localhost:3000/notes`, note);
  }

  // sort(searchedResults: Note[]) {
  //   let noteCount: number[];

  //   searchedResults.forEach((note) => {
  //     let noteId = this.noteService.getId(note);

  //     if (noteCount[noteId]) {
  //       noteCount[noteId] += 1;
  //     } else {
  //       noteCount[noteId] = 1;
  //     }
  //   });

  //   this.filtered = this.filtered.sort((a: Note, b: Note) => {
  //     let aID = this.noteService.getId(a);
  //     let bID = this.noteService.getId(b);

  //     let aCount = noteCount[aID];
  //     let bCount = noteCount[bID];

  //     return bCount - aCount;
  //   });
  // }
}

// animations: [
//   trigger('animation', [
//     transition('void => *', [
//       style({
//         height: 0,
//         opacity: 0,
//         transform: 'scale(0.8)',
//         'margin-bottom': 0,
//         paddingTop: 0,
//         paddingBottom: 0,
//         paddingRight: 0,
//         paddingLeft: 0,
//       }),

//       animate(
//         '50ms',
//         style({
//           height: '*',
//           'margin-bottom': '*',
//           paddingTop: '*',
//           paddingBottom: '*',
//           paddingRight: '*',
//           paddingLeft: '*',
//         })
//       ),
//       animate(68),
//     ]),
//   ]),
// ],
