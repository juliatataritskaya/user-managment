import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  formModel: any;
  userForm: FormGroup;

  @Output() userNewData = new EventEmitter<any>();

  @Input() userData: User;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formModel = this.createFormModel();
    this.userForm = this.fb.group(this.formModel);
    this.createFormModel();
    if (this.userData) {
      this.setUserForm();
    }
  }

  // Create user form
  createFormModel() {
    return {
      id: new FormControl('', []),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    };
  }

  // Emit data to another component for continue saving
  onSave() {
    if (this.userForm.invalid) {
      const invalidFields = this.findInvalidControls();
      alert(invalidFields.join(', ') +
        (invalidFields.length > 1 ? ' are invalid fields.' : ' is invalid field.'));
      return;
    }
    this.userNewData.emit({userData: this.userForm});
  }

  // Set user form of data
  setUserForm() {
    this.userForm.patchValue({
      id: this.userData['id'],
      name: this.userData['name'],
      lastname: this.userData['lastname'],
      phone: this.userData['phone']
    });
  }

  // Find invalid fields and return Array<string>
  findInvalidControls() {
    const invalid = [];
    const controls = this.userForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name.toLocaleUpperCase());
      }
    }
    return invalid;
  }

}
