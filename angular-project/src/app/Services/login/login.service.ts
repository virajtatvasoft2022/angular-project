import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ACCESS_TOKEN, APPLICATION_URL } from '../../Shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  accessToken: string = '';

  constructor(private http: HttpClient) { }

  login({ userName, password }: { userName: string; password: string; }) {
    return this.http.post(`${APPLICATION_URL}oauth2/token`, {
      username: userName,
      password: password
    });
  }
}
