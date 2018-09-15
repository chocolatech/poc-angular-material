import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  repos$;

  constructor(private service: HttpService) {
   }

  getRepos(username) {
    this.service.getRepos(username)
    .subscribe(data => {
      this.repos$ = data;
      this.username = username;
    });
    
  }
}
