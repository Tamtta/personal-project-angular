import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemFormComponent } from './components/add-item-form/add-item-form.component';
import { BudgetCardComponent } from './components/budget-list/budget-card/budget-card.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { EditComponent } from './components/edit/edit.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { BudgetManagerRoutingModule } from './budget-manager-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetListComponent,
    BudgetCardComponent,
    EditComponent,
  ],
  imports: [CommonModule, BudgetManagerRoutingModule, SharedModule],
  entryComponents: [EditComponent],
})
export class BudgetManagerModule {}
