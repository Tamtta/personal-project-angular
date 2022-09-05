export class Note {
  title!: string;
  body!: string;
  userId?: number;
}

export class NoteAPI {
  note!: Note;
  id?: number;
}

export interface NoteAPIArr {
  note?: Note[];
  id: number | string;
}
