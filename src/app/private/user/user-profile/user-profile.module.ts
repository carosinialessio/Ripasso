import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserProfileRoutingModule 
  ]
})
export class UserProfileModule { }
