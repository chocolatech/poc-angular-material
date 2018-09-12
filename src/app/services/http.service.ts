import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) {}

  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

}
