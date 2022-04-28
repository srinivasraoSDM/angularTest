import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/users', pathMatch: 'full' },
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // catch all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
