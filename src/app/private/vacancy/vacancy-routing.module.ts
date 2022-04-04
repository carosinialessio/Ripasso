import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVacancyComponent } from './create-vacancy/create-vacancy.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyComponent } from './vacancy.component';

const vacancyRoutes: Routes = [
  {
    path: '',
    component: VacancyComponent 
  },
  {
    path: 'vacancy-list',
    loadChildren: () => import('./vacancy-list/vacancy-list.module').then (m => m.VacancyListModule)
  },
  {
    path: 'create-vacancy',
    loadChildren: () => import('./create-vacancy/create-vacancy.module').then (m => m.CreateVacancyModule)
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(vacancyRoutes)
  ],
  exports: [RouterModule]
})
export class VacancyRoutingModule { }
