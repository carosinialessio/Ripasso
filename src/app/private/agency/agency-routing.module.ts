import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';

const agencyRoutes: Routes = [
  {
    path: '',
    component: AgencyComponent
  },
  {
    path: 'agency-profile',
    loadChildren: () => import('./agency-profile/agency-profile.module').then(m => m.AgencyProfileModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(agencyRoutes)
  ],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
