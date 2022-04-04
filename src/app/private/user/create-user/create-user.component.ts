import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utente } from 'src/app/shared/model/utente';
import {Message,MessageService} from 'primeng/api';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user: Utente;


  constructor(private messageService: MessageService, private userService: UserService) {
    this.user = new Utente();
   }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(res => {
      if(res){
        this.messageService.add({key: 'tc', severity:'success', summary: 'Utente Creato', detail: 'Utente creato con successo'});
        this.user = new Utente();
      }
    });
    
  }

  clear() {
    this.user = new Utente();
  }

}
