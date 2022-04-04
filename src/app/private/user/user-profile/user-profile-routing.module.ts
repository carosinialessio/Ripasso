import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile.component';

const userProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(userProfileRoutes)
  ],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
