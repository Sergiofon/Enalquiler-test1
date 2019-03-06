import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: object;

  constructor(private _service: UsersService) { }

  ngOnInit() {
    this._service.getUsers()
      .subscribe(res => console.log(res));

      console.log('dataaaaaa', this.users);
  }

}
