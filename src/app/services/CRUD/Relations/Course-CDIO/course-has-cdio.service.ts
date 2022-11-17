import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseHasCDIO } from 'src/app/model/CourseHasCDIO/course-has-cdio';

@Injectable({
  providedIn: 'root'
})
export class CourseHasCDIOService {

  private baseURL: string = environment.baseUrl+"/admin";

  constructor(private http: HttpClient) { }

  getCourseHasCDIO(courseNumber: number, cdioNumber: number): Observable<HttpResponse<CourseHasCDIO>>{
    return this.http.get<CourseHasCDIO>
    (this.baseURL+`/course/${courseNumber}/cdio/${cdioNumber}`, {observe: 'response'});
  }
}
