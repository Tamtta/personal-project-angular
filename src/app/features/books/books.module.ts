import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, BooksRoutingModule, MatIconModule],
})
export class BooksModule {}
