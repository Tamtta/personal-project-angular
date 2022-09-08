import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NoteDetailsResolver } from './components/note-details/resolver/note-details-resolver.service';
import { NotesListComponent } from './components/notes-list/notes-list.component';

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
