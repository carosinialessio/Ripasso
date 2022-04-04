import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Vacancy } from 'src/app/shared/model/vacacy';
import { VacancyService } from '../api/vacancy.service';

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss']
})
export class CreateVacancyComponent implements OnInit {

  vacancy: Vacancy;

  constructor(private messageService: MessageService, private vacancyService: VacancyService) { }

  ngOnInit(): void {
    this.vacancy = new Vacancy();
  }

  createVacancy(){
    this.vacancyService.createVacancy(this.vacancy).subscribe(res => {
      if(res){
        this.messageService.add({key: 'tc', severity:'success', summary: 'Offerta Creata', detail: 'Offerta inserita con successo'});
        this.vacancy = new Vacancy();
      }
    });
  }

  clear(){
    this.vacancy = new Vacancy();
  }

}
