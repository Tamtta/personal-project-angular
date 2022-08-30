import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from 'src/app/core/guards/logged-user.guard';
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
    path: '',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoggedUserGuard],
  },

  {
    path: 'notes',
    loadChildren: () =>
      import('../notes/notes.module').then((m) => m.NotesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
