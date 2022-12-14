import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LogInComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  exports: [],
})
export class AuthModule {}
