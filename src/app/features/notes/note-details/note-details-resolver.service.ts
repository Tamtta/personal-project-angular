import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotesService } from '../services/notes.service';

@Injectable({
  providedIn: 'root',
})
export class NoteDetailsResolver implements Resolve<any> {
  constructor(private noteService: NotesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.paramMap.get('id') || 0;
    if (id != '0') {
      return this.noteService.getById$(+id || 0).pipe(
        map((notes: any) => {
          console.log('hi from resolver');
          return { notes, id };
        }),
        catchError(() => EMPTY)
      );
    }
    return of({ id: 0 });
  }
}
