import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyProfileRoutingModule } from './agency-profile-routing.module';
import { AgencyProfileComponent } from './agency-profile.component';



@NgModule({
  declarations: [AgencyProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgencyProfileRoutingModule
  ]
})
export class AgencyProfileModule { }
