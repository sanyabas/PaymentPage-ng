import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
  }

  loginForm: FormGroup;
  isLoggedIn = false;
  authError = false;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group(
      {
        login: ['', [Validators.required, Validators.pattern(/^[0-9a-zA-Z]+$/)]],
        password: ['', [Validators.required]]
      }
    );
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      result => {
        localStorage.setItem('token', result['auth_token']);
        this.router.navigateByUrl('/admin/logs/card');
      },
      error => {
        console.error(error);
        this.authError = true;
      });
  }

  hideError() {
    this.authError = false;
  }

  checkLogin() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.tokenIsAuthenticated(token).subscribe(data => {
        console.log(data);
        if (data['ok'] === 'true') {
          this.isLoggedIn = true;
        }
      }, error => console.error(error));
    } else {
      this.isLoggedIn = false;
    }
  }
}
