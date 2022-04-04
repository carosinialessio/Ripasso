import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';

const USER: string = "user";
const ADMIN: string = "admin";
const AGENCY: string = "agency";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges{

  @Input() role: string;

  constructor() {
   }

  ngOnChanges(changes: SimpleChanges): void {
    switch(this.role) {
      case "admin": {
        this.items = [
          {label: 'Offerte', icon: 'pi pi-fw pi-home', routerLink: 'vacancy/vacancy-list'},
    
          //user
          {label: 'Profilo', icon: 'pi pi-fw pi-user', routerLink: 'user/user-profile', visible: false },
    
          //azienda
          {label: 'Profilo', icon: 'pi pi-fw pi-briefcase', routerLink: 'agency/agency-profile', visible: false },
    
          //admin
          {label: 'Crea Offerta', icon: 'pi pi-fw pi-plus', routerLink: 'vacancy/create-vacancy', visible: true},
          {label: 'Crea Utente', icon: 'pi pi-fw pi-user-plus', routerLink: 'user/create-user', visible: true},
        ];
        this.activeItem = this.items[0];
        break;
      }
      case "user": {
        this.items = [
          {label: 'Offerte', icon: 'pi pi-fw pi-home', routerLink: 'vacancy/vacancy-list'},
    
          //user
          {label: 'Profilo', icon: 'pi pi-fw pi-user', routerLink: 'user/user-profile', visible: true },
    
          //azienda
          {label: 'Profilo', icon: 'pi pi-fw pi-briefcase', routerLink: 'agency/agency-profile', visible: false},
    
          //admin
          {label: 'Crea Offerta', icon: 'pi pi-fw pi-plus', routerLink: 'vacancy/create-vacancy', visible: false},
          {label: 'Crea Utente', icon: 'pi pi-fw pi-user-plus', routerLink: 'user/create-user', visible: false},
        ];
        this.activeItem = this.items[0];
        break;
      }
      case "agency": {
        this.items = [
          {label: 'Offerte', icon: 'pi pi-fw pi-home', routerLink: 'vacancy/vacancy-list'},

          //user
          {label: 'Profilo', icon: 'pi pi-fw pi-user', routerLink: 'user/user-profile', visible: false },
    
          //azienda
          {label: 'Profilo', icon: 'pi pi-fw pi-briefcase', routerLink: 'agency/agency-profile', visible: true},
    
          //admin
          {label: 'Crea Offerta', icon: 'pi pi-fw pi-plus', routerLink: 'vacancy/create-vacancy', visible: false},
          {label: 'Crea Utente', icon: 'pi pi-fw pi-user-plus', routerLink: 'user/create-user', visible: false},
        ];
        this.activeItem = this.items[0];
        break;
      }
    }
  }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit(): void {
    this.items = [
      {label: 'Offerte', icon: 'pi pi-fw pi-home', routerLink: 'vacancy/vacancy-list'},

      //user
      {label: 'Profilo', icon: 'pi pi-fw pi-user', routerLink: 'user/user-profile', visible: this.role == "user" },

      //azienda
      {label: 'Profilo', icon: 'pi pi-fw pi-briefcase', routerLink: 'agency/agency-profile', visible: this.role == "agency"},

      //admin
      {label: 'Crea Offerta', icon: 'pi pi-fw pi-plus', routerLink: 'vacancy/create-vacancy', visible: this.role == "admin"},
      {label: 'Crea Utente', icon: 'pi pi-fw pi-user-plus', routerLink: 'user/create-user', visible: this.role == "admin"},
    ];
    this.activeItem = this.items[0];
  }



}
