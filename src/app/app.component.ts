import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citizen-form';
  users = [];
  constructor(httpClient: HttpClient) {
    httpClient.get<Array<any>>('https://citizen-form-api.azurewebsites.net/users').subscribe(data => {
      this.users = data
    })
  }
}
