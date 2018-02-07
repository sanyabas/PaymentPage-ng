import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthCheckService implements CanActivate {

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/admin/login');
      return false;
    }
  }

  constructor(private auth: AuthService, private router: Router) {
  }
}
