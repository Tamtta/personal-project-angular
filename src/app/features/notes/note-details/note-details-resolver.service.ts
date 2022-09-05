import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Note } from '../interfaces/note.model';
import { NotesService } from '../services/notes.service';

@Injectable({
  providedIn: 'root',
})
export class NoteDetailsResolver
  implements Resolve<{ notes?: Note[]; id: number | string }>
{
  constructor(private noteService: NotesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ notes?: Note[]; id: number | string }> {
    const id = route.paramMap.get('id') || 0;
    if (id != '0') {
      return this.noteService.getById$(+id || 0).pipe(
        map((notes: any) => {
          console.log('hi from resolver');
          console.log(notes, id);
          return { notes, id };
        }),
        catchError(() => EMPTY)
      );
    }
    return of({ id: 0 });
  }
}
