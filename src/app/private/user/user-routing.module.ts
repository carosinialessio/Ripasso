import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'create-user',
    loadChildren: () => import('./create-user/create-user.module').then(m => m.CreateUserModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
