import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Note } from '../../../interfaces/note.model';
import { NotesService } from '../../../services/notes.service';

@Injectable({
  providedIn: 'root',
})
export class NoteDetailsResolver
  implements Resolve<{ notes?: Note; id: number | string }>
{
  constructor(private noteService: NotesService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<{ notes?: Note; id: number | string }> {
    const id = route.paramMap.get('id') || 0;
    if (id != '0') {
      return this.noteService.getById$(+id || 0).pipe(
        map((notes: Note) => {
          return { notes, id };
        }),
        catchError(() => EMPTY)
      );
    }
    return of({ id: 0 });
  }
}

// { notes?: Note[]; id: number | string }
