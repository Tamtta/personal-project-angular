import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailsComponent implements OnInit {
  note!: Note;
  noteId!: number;
  new!: boolean;

  constructor(
    private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.note = new Note();
      if (params['id']) {
        this.note = this.noteService.get(params['id']);
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });

    // this.note = new Note();
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      this.noteService.add(form.value);
    } else {
      this.noteService.update(this.noteId, form.value.title, form.value.body);
    }

    this.router.navigateByUrl('/dashboard/notes');
  }

  cancel() {
    this.router.navigateByUrl('/dashboard/notes');
  }

  // post(note: Note[]) {
  //   return this.http.post(`http://localhost:3000/notes`, note);
  // }
}