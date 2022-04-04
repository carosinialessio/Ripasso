import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyListComponent } from './vacancy-list.component';

const vacancyListRoutes: Routes = [
  {
    path: '',
    component: VacancyListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(vacancyListRoutes)
  ],
  exports: [RouterModule]
})
export class VacancyListRoutingModule { }
