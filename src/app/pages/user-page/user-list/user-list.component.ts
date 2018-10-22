import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {AppState} from '../../../app.state';
import {Store} from '@ngrx/store';
import * as UserActions from './../../../actions/user.actions';
import {Observable} from 'rxjs/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(private userService: UserService, private store: Store<AppState>,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.store.dispatch(new UserActions.LoadUser(data));
      this.users = this.store.select('user');
    });
  }

  // Delete user from server
  onDelete(deleteUser: User, index: number) {
    this.userService.deleteUser(deleteUser.id).subscribe(result => {
      this.store.dispatch(new UserActions.RemoveUser(index));
    });
  }

}
