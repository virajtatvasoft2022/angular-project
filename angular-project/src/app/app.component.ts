import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ACCESS_TOKEN } from './Shared/constants/constants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';

  ngOnInit() {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}
