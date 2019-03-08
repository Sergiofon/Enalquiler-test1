import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/services';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Utils]
})
export class HomeComponent implements OnInit {

  public users: any = {};
  public finalUsers: Object[];
  public alertInfo: Object[] = [];
  public showAlert: boolean = false;

  constructor(private _service: UsersService, 
              public utils: Utils) {}

  ngOnInit() {
    // Getting users and adding human readable format date
    this._service.getUsers().subscribe(
      res => this.users = res,
      err => console.error(err),
      () => this.finalUsers = this.utils.addDate(this.users.users)
    );
    
    // Subscription to show alert if necessary 
    this._service.cast.subscribe(info => { 
      if(info) this.alertInfo.push(info);
      this.showAlert = true;
    });
  }
}
