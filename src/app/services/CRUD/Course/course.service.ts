import { CourseHasCDIO } from 'src/app/model/CourseHasCDIO/course-has-cdio';
import { Value } from './../../../model/Value/Value';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from 'src/app/model/course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseURL = environment.baseUrl + "/admin/course"

  constructor(private http: HttpClient) { }

  get(courseNumber: number): Observable<HttpResponse<Course>>{
    return this.http.get<Course>(this.baseURL+"/"+courseNumber, { observe: 'response'});
  }

  getAll(): Observable<HttpResponse<Course[]>>{
    return this.http.get<Course[]>(this.baseURL, { observe: 'response'});
  }

  addCdio(courseNumber:number,cdio:number,bloom:number): Observable<HttpResponse<Course>>{
    let val:Value = new Value(bloom)
    return this.http.post<Course>(this.baseURL+"/"+courseNumber+"/cdio/"+cdio,val,{observe: 'response'})
  }

  updateBloomValue(courseNumber:number,cdio:number,bloom:number): Observable<HttpResponse<Course>>{
    let c:CourseHasCDIO = new CourseHasCDIO(courseNumber+"",cdio,bloom)
    return this.http.put<Course>(this.baseURL+"/"+courseNumber+"/cdio/"+cdio,c,{observe:'response'})
  }

  deleteCDIOFromCourse(courseNumber:number,cdio:number,course:Course): Observable<HttpResponse<Course>>{
    return this.http.put<Course>(this.baseURL+"/"+courseNumber+"/cdio/"+cdio,"",{observe:'response'})
  }
}
