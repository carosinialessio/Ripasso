import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const privateRoutes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children:[
      {
        path: '',
        pathMatch: 'full'
      },
      {
        path: 'vacancy',
        loadChildren: () => import('./vacancy/vacancy.module').then(m => m.VacancyModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'agency',
        loadChildren: () => import('./agency/agency.module').then(m => m.AgencyModule)
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(privateRoutes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
