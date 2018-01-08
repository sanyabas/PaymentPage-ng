import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BankingServiceService {

  constructor(private http: HttpClient) { }

}
