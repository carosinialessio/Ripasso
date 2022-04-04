import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user.component';

const createUserRoutes: Routes = [
  {
    path: '',
    component: CreateUserComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(createUserRoutes)
  ],
  exports: [RouterModule]
})
export class CreateUserRoutingModule { }
