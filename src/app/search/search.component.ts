import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

@Output() onDataLoad = new EventEmitter();;
username;

  ngOnInit() {

  }

  loadData() {
    this.onDataLoad.emit(this.username);
  }

}
