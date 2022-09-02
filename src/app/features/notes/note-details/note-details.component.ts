import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Note, NoteAPI } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailsComponent implements OnInit {
  note$!: Observable<Note>;
  noteId!: number;
  new: boolean = false;

  constructor(
    private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] != 0) {
        this.note$ = this.noteService.getById$(params['id']).pipe(
          map((v: any) => {
            this.noteId = v.id;
            return v.note;
          })
        );
        this.noteId = params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      this.noteService
        .add(form.value)
        .subscribe(() => this.router.navigateByUrl('/dashboard/notes'));
    } else {
      this.noteService
        .update$(this.noteId, {
          note: {
            title: form.value.title,
            body: form.value.body,
          },
        })
        .subscribe(() => {
          this.router.navigateByUrl('/dashboard/notes');
        });
    }
  }

  cancel() {
    this.router.navigateByUrl('/dashboard/notes');
  }
}
