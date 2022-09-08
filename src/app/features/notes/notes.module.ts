import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './components/layout/layout.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

import { NotesRoutingModule } from './notes-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NotesListComponent,
    LayoutComponent,
    NoteCardComponent,
    NoteDetailsComponent,
  ],
  imports: [CommonModule, NotesRoutingModule, SharedModule],
})
export class NotesModule {}
