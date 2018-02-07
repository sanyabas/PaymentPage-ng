import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private url = 'http://localhost:3416/login';
  public isAuthenticated = false;

  login(user) {
    return this.http.post(this.url, user);
  }

  tokenIsAuthenticated(token) {
    const options = {headers: new HttpHeaders({Authorization: `Bearer ${token}`})};
    return this.http.get(this.url, options);
  }

  userIsAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) {
      this.tokenIsAuthenticated(token).subscribe(data => {
        console.log(data);
        if (data['ok'] === 'true') {
          this.isAuthenticated = true;
        }
      }, error => console.error(error));
    } else {
      this.isAuthenticated = false;
    }
  }
}
