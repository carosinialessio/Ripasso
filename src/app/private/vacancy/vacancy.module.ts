import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { VacancyRoutingModule } from './vacancy-routing.module';
import { VacancyComponent } from './vacancy.component';



@NgModule({
  declarations: [VacancyComponent],
  imports: [
    CommonModule,
    SharedModule,
    VacancyRoutingModule
  ]
})
export class VacancyModule { }
