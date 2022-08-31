import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: string;

  @Output('delete') dltEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private noteService: NotesService) {}

  ngOnInit(): void {}

  delete() {
    console.log('oe');
    // this.noteService.delete();
    this.dltEvent.emit();
  }
}
