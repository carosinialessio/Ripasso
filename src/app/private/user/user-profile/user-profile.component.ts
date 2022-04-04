import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/shared/model/utente';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: Utente = new Utente();
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(res => {
      if(res){
        this.user = res;
      }
    });
  }

}
