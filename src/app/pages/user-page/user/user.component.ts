import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUser = new EventEmitter<User>();
  @Output() editUser = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {
  }

  //Emit user data to another component for deleting
  onDelete() {
    this.deleteUser.emit(this.user);
  }

  //Emit user data to another component for changing
  onEdit() {
    this.editUser.emit(this.user);
  }

}
