import { Component, OnInit } from '@angular/core';
import { Azienda } from 'src/app/shared/model/azienda';
import { AgencyService } from '../api/agency.service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.scss']
})
export class AgencyProfileComponent implements OnInit {

  agency: Azienda;

  constructor(private agencyService: AgencyService) { }

  ngOnInit(): void {
    this.agencyService.getAgency().subscribe(res => {
      if(res){
        this.agency = res;
      }
    })
  }

}
