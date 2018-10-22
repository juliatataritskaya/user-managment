import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {AppState} from '../../../app.state';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as UserActions from './../../../actions/user.actions';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {
  private sub: any;
  userData: User;

  constructor(private userService: UserService, private router: Router,
              private store: Store<AppState>, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.getUserData(+params['id']);
    });

  }

  // Get user data from server
  // The parameter 'id' has the type number
  getUserData(id: number) {
    this.userService.getUser(id)
      .subscribe((result) => {
        this.userData = result;
      })
  }

  // Save new user data to server
  // The parameter 'data' has the type object
  save(data) {
    this.userService.updateUser(data.userData.value.id, data.userData.value)
      .subscribe((result) => {
        alert('User ' + result.name + ' was updated.');
        this.store.dispatch(new UserActions.UpdateUser(data.userData.value));
        this.router.navigate(['../list']);
      })
  }

}
