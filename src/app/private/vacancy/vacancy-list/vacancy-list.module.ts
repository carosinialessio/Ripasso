import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from './vacancy-list.component';
import { VacancyListRoutingModule } from './vacancy-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [VacancyListComponent],
  imports: [
    CommonModule,
    SharedModule,
    VacancyListRoutingModule,
  ]
})
export class VacancyListModule { }
