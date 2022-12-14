import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AnimDirective } from './directives/animation.directive';

import { CustomDatePipePipe } from './pipes/custom-date-pipe.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AnimDirective, CustomDatePipePipe],
  imports: [CommonModule],
  exports: [
    TranslateModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    AnimDirective,
    CustomDatePipePipe,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
