import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ACCESS_TOKEN } from '../../Shared/constants/constants';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private routerService: Router) { }
  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.routerService.navigateByUrl('login');
  }
}
