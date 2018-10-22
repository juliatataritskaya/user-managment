import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: any;
  loginForm: FormGroup;
  errorMessage: string | null;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.formModel = this.createFormModel();
    this.loginForm = this.fb.group(this.formModel);
    this.createFormModel();
  }

  // Create login form
  createFormModel() {
    return {
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    };
  }

  // Login users. If login data is invalid - send message in alert-box, else redirect
  // on home page and send user data to header
  login() {
    this.errorMessage = null;
    if (!this.loginForm.valid) {
      this.errorMessage = 'Login data is invalid';
      return;
    }
    this.router.navigate(['/home']);
  }
}
