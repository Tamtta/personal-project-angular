import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from 'src/app/core/guards/logged-user/logged-user.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'user',
    component: UserComponent,
  },

  {
    path: '../login',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoggedUserGuard],
  },

  {
    path: '../register',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoggedUserGuard],
  },

  {
    path: 'notes',
    loadChildren: () =>
      import('../notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'budget-manager',
    loadChildren: () =>
      import('../budget-manager/budget-manager.module').then(
        (m) => m.BudgetManagerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
