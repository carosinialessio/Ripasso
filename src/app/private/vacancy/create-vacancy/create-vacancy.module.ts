import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateVacancyRoutingModule } from './create-vacancy-routing.module';
import { CreateVacancyComponent } from './create-vacancy.component';



@NgModule({
  declarations: [CreateVacancyComponent],
  imports: [
    CommonModule,
    SharedModule,
    CreateVacancyRoutingModule
  ]
})
export class CreateVacancyModule { }
