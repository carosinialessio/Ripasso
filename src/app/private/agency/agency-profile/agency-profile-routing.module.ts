import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgencyProfileComponent } from './agency-profile.component';

const agencyProfileRoutes: Routes = [
  {
    path: '',
    component: AgencyProfileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(agencyProfileRoutes)
  ],
  exports: [RouterModule]
})
export class AgencyProfileRoutingModule { }
