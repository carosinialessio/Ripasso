import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserRoutingModule } from './create-user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateUserComponent } from './create-user.component';



@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    CreateUserRoutingModule,
    SharedModule
  ]
})
export class CreateUserModule { }
