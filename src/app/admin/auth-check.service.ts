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
    // let a = null;
    // this.auth.userIsAuthenticated().then(res => a = res);
    // console.log(`auth returned ${a}`);
    // if (a) {
    //   console.log('we are authenticated');
    //   return true;
    // } else {
    //   this.router.navigateByUrl('/admin/login');
    //   console.log('not authenticated, redirecting');
    //   return false;
  }

  constructor(private auth: AuthService, private router: Router) {
  }

}
