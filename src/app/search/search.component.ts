import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username = '';
  repos$;

  constructor(private service: HttpService) {
   }


  ngOnInit() {
  }

  getRepos() {
    this.service.getRepos(this.username)
    .subscribe(data => {
      this.repos$ = data;
      console.log(this.repos$);
    });
    
  }

}
