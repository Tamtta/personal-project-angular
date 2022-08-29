import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [DashboardComponent, UserComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
