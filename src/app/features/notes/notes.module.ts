import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { MainRoutingModule } from '../main/main-routing.module';
import { NotesRoutingModule } from './notes-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  declarations: [NotesListComponent, LayoutComponent, NoteCardComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class NotesModule {}
