import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  loginForm: FormGroup;

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
}
