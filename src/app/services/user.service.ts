import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs/index';

@Injectable()
export class UserService {
  public id = 3;

  public initialUsers: User[] = [
    {id: 1, name: 'Name1', lastname: 'Lastname 1', phone: '1212333223'},
    {id: 2, name: 'Name2', lastname: 'Lastname 2', phone: '234141124'},
    {id: 3, name: 'Name3', lastname: 'Lastname 3', phone: '235252352'}
  ];

  constructor () {}

  public getUsers (): Observable<User[]> {
    return new Observable (observer => {
      observer.next(this.initialUsers)
    });
  }

  public deleteUser (id: number): Observable<boolean> {
    this.initialUsers = this.initialUsers.filter((user) => {
      return user.id !== id;
    });
    return new Observable (observer => {
      observer.next(true)
    });
  }

  public addUser (userData: User): Observable<User> {
    this.id = ++this.id;
    userData.id = this.id;
    this.initialUsers.push(userData);
    return new Observable (observer => {
      observer.next(userData)
    });
  }

  public getUser(id: number): Observable<User> {
    return new Observable (observer => {
      observer.next(this.initialUsers.find((user) => {
        return user.id === id;
      }))
    });
  }

  public updateUser(id: number, userData: User): Observable<User> {
    const index = this.initialUsers.findIndex((user) => {
      return user.id === id;
    });
    this.initialUsers.splice(index, 1, userData);

    return new Observable (observer => {
      observer.next(userData);
    });
  }

}
