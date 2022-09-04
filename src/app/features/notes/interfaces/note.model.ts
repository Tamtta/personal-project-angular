export class Note {
  title!: string;
  body!: string;
  userId?: number;
}

export class NoteAPI {
  note!: Note;
  id?: number;
}
