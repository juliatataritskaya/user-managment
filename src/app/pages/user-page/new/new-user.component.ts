import {Component} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from './../../../app.state';
import * as UserActions from './../../../actions/user.actions';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html'
})
export class NewUserComponent {
  constructor(private userService: UserService, private router: Router,
              private store: Store<AppState>) {
  }

  // Save new user to the server
  // The parameter 'data' has the type User
  save(value: User) {
    this.userService.addUser(value['userData'].value).subscribe((data) => {
      alert('User ' + data.name + ' ' + data.lastname + ' was added.');
      this.store.dispatch(new UserActions.AddUser(data));
      this.router.navigate(['../list']);
    }, (error) => {
      console.log(error);
    });
  }

}
