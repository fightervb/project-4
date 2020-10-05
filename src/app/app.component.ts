import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="vishal";
  teams$: Observable<any> = this.http.get('/api/teams');
  myjson= {
    "id": 3,
    "name": "vishal bansode",
    "coach": "aurangabad",
    "description": "k!"
  }
​
  constructor(private http: HttpClient) {}
}