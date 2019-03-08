import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UsersService {

  private modalInfo = new BehaviorSubject({});
  public cast = this.modalInfo.asObservable();

  constructor(private httpService: HttpClient) { }

  // Service that return all users
  public getUsers() {
    return this.httpService.get('../assets/users.json');
  }

  // Service to emit info to show in an alert if necessary
  public emitResult(isToday, willBeTomorrow, name) {
    
    return isToday ? this.modalInfo.next({
                          "name": name,
                          "message": 'Hoy es el cumpleaños de '
                        }) : willBeTomorrow ? this.modalInfo.next({
                                                  "name": name,
                                                  "message": 'Mañana es el cumpleaños de '
                                                }) : false; 
  }
}