import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCardComponent implements OnInit {
  @Input() title!: string;
  @Input() body!: string;
  @Input() link!: string;

  @Output('delete') dltEvent: EventEmitter<void> = new EventEmitter<void>();

  date = new Date();
  format!: 'mediumDate';
  constructor() {}

  ngOnInit(): void {}

  delete() {
    event?.stopPropagation();
    this.dltEvent.emit();
  }
}
