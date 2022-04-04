import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/shared/model/vacacy';
import { VacancyService } from '../api/vacancy.service';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.scss']
})
export class VacancyListComponent implements OnInit {

  vacancyList: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancyService.getAllVacancy().subscribe(res => {
      if(res){
        this.vacancyList = res;
      }
    });
  }

}
