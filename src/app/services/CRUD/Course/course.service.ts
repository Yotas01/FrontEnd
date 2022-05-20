import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { Course } from 'src/app/model/course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseURL = Constants.baseUrl + "/admin/course"

  constructor(private http: HttpClient) { }

  get(courseNumber: number): Observable<HttpResponse<Course>>{
    return this.http.get<Course>(this.baseURL+"/"+courseNumber, { observe: 'response'});
  }

  getAll(): Observable<HttpResponse<Course[]>>{
    return this.http.get<Course[]>(this.baseURL, { observe: 'response'});
  }
}
