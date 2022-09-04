import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetCardComponent } from './budget-list/budget-card/budget-card.component';
import { EditComponent } from './edit/edit.component';

import { BooksRoutingModule } from './books-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    CatalogueComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetListComponent,
    BudgetCardComponent,
    EditComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule],
  entryComponents: [EditComponent],
})
export class BooksModule {}
