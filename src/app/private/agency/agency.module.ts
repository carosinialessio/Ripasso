import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';

@NgModule({
  declarations: [AgencyComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgencyRoutingModule
  ]
})
export class AgencyModule { }
