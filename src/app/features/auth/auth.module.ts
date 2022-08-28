import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogInComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
  exports: [AuthRoutingModule],
})
export class AuthModule {}
