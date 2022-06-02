import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { CourseHasCDIO } from 'src/app/model/CourseHasCDIO/course-has-cdio';

@Injectable({
  providedIn: 'root'
})
export class CourseHasCDIOService {

  private baseURL: string = Constants.baseUrl+"/admin";

  constructor(private http: HttpClient) { }

  getCourseHasCDIO(courseNumber: number, cdioNumber: number): Observable<HttpResponse<CourseHasCDIO>>{
    return this.http.get<CourseHasCDIO>
    (this.baseURL+`/course/${courseNumber}/cdio/${cdioNumber}`, {observe: 'response'});
  }
}
