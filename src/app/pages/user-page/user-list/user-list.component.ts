import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from '../../../models/user.model';
import {AppState} from "../../../app.state";
import { Store } from '@ngrx/store';
import * as UserActions from './../../../actions/user.actions';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: Observable<User[]>;

  constructor (private userService: UserService, private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.dispatch(new UserActions.LoadUser(this.userService.getUsers()));
    // this.users = this.store.select('users');
    // this.userService.getUsers().subscribe((data) => {
    //   // this.users = data;
    //   this.store.dispatch(new UserActions.LoadUser(data));
    //   this.users = this.store.select('users');
    // });
    // console.log(this.users)
  }

  onDelete(deleteUser: User) {
    console.log(deleteUser);
    // this.users = this.users.filter( user => user.id !== deleteUser.id );
    console.log(this.users);
  }
}
