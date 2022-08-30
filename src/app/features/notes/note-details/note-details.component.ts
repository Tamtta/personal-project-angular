import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent implements OnInit {
  note!: Note;

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    this.noteService.add(form.value);
  }
}
