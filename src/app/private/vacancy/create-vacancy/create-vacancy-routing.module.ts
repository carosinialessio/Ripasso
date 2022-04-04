import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateVacancyComponent } from './create-vacancy.component';

const createVacancyRoutes: Routes = [
  {
    path: '',
    component: CreateVacancyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(createVacancyRoutes)
  ],
  exports: [RouterModule]
})
export class CreateVacancyRoutingModule { }
