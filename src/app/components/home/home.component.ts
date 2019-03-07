import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: any = {};

  constructor(private _service: UsersService) { }

  ngOnInit() {
    this._service.getUsers().subscribe(
      res => this.users = res,
      err => console.error(err)
    );
  }

}
