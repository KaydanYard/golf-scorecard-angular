import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private url = "https://golf-courses-api.herokuapp.com/courses/"
  apiService: any;

  constructor(private http: HttpClient) { }

  getCourses($event) {
    this.url = "https://golf-courses-api.herokuapp.com/courses/"
    this.url += $event
    return this.http.get(this.url)
  }
}
