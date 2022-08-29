import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoggedUserGuard } from 'src/app/core/guards/logged-user.guard';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LogInComponent,
    canActivate: [LoggedUserGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedUserGuard],
  },

  {
    path: 'dashboard',
    loadChildren: () => import('../main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
