import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

import { MainRoutingModule } from './main-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, UserComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
