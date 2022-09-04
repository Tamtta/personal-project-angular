import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesListComponent } from './notes-list/notes-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NoteDetailsComponent } from './note-details/note-details.component';

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
