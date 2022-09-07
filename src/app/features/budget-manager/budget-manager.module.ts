import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetCardComponent } from './budget-list/budget-card/budget-card.component';
import { EditComponent } from './edit/edit.component';

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
