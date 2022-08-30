import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  notes: Note[] = new Array<Note>();

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
  }
}
