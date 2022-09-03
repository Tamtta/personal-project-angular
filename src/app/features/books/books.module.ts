import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetCardComponent } from './budget-list/budget-card/budget-card.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

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
  imports: [CommonModule, BooksRoutingModule, SharedModule, FormsModule],
  entryComponents: [EditComponent],
})
export class BooksModule {}
