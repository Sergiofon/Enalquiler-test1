import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private httpService: HttpClient) { }

  getUsers() {
    return this.httpService.get('../assets/users.json');
  }

}