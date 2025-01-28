import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Services/login/login.service';
import { Router } from '@angular/router';
import { ACCESS_TOKEN } from '../../Shared/constants/constants';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userName: string = "";
  password: string = "";
  accessToken: string = "";


  constructor(private loginService: LoginService, private routerService: Router) { }

  login() {
    this.loginService.login({ userName: this.userName, password: this.password }).subscribe((response: any) => {
      this.accessToken = response.access_token;
      localStorage.setItem(ACCESS_TOKEN, this.accessToken);
      this.routerService.navigateByUrl('dashboard');
    });
  }
}
