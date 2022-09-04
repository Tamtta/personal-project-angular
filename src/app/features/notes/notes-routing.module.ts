import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NoteDetailsResolver } from './note-details/note-details-resolver.service';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: NotesListComponent },
      {
        path: ':id',
        component: NoteDetailsComponent,
        resolve: { userResolvedData: NoteDetailsResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
