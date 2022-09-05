import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteDetailsComponent implements OnInit {
  note$!: Observable<Note>;
  noteId!: number;
  new: boolean = false;
  note: Note = {
    body: '',
    title: '',
    userId: 0,
  };

  constructor(
    private noteService: NotesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const { notes, id } = this.route.snapshot.data['userResolvedData'];
    if (id != 0) {
      this.note = notes.note;
      this.noteId = id;
      this.new = false;
    } else {
      this.new = true;
    }
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
