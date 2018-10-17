import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() deleteUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleteUser.emit(this.user);
  }

}
