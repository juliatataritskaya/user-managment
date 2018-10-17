import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from "rxjs/index";

@Injectable()
export class UserService{

  constructor () {}

  public getUsers (): Observable<User[]> {
    return new Observable (observer => {
      observer.next([
        {id: 1, name: 'Name1', lastname: 'Lastname 1', phone: '1212333223'},
        {id: 2, name: 'Name2', lastname: 'Lastname 2', phone: '234141124'},
        {id: 3, name: 'Name3', lastname: 'Lastname 3', phone: '235252352'}
      ])
    });
  }

}
