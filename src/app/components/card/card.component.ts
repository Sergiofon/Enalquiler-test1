import { Component, OnInit, Input} from '@angular/core';

import { Timestamp } from '../../../../node_modules/rxjs';

import { UsersService } from '../../services/services';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers:[Utils]
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() birthday: Timestamp<any>;
  @Input() avatar: string;

  public isBirthday: boolean;
  public willBeBirthday: boolean;
  public message: string;
  
  constructor(public utils: Utils,
              private _services: UsersService) {}

  ngOnInit() {
    this.addAvatar();
    this.checkDate();
    this.timer();
  }
  
  // Checking if the profile contains avatar & adding default avatar if necessary
  public addAvatar() {
    this.avatar = this.avatar ? this.avatar : '../../../assets/img/user.svg';
  }

  // Cheking if user´s birthday is today or tomorrow & emitting if necessary
  public checkDate() {
    console.log('hola');
    this.isBirthday = this.utils.isBirthday(this.birthday);
    this.willBeBirthday = this.utils.willBeBirthday(this.birthday);
    
    this._services.emitResult(this.isBirthday, this.willBeBirthday, this.name);
  }

  // Timer to check every 24 hours if sessions is open
  public timer(){
    const nextDate = new Date();
    let difference; 

    if (nextDate.getHours() === 0) { 
        this.checkDate();
    } else {
        nextDate.setHours(nextDate.getHours() +23);
        nextDate.setMinutes(0);
        nextDate.setSeconds(0);
        difference = nextDate.getTime() - new Date().getTime();
      
        setTimeout(this.checkDate, difference);
    }
  }
}