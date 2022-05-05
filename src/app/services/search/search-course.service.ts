import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { CourseReview } from 'src/app/model/courseReview/course-review';

@Injectable({
  providedIn: 'root'
})
export class SearchCourseService { 

  private baseUrl:string = Constants.baseUrl + "/course-review";

  constructor(private http:HttpClient) { }

  getCourseForReview(course:number,section:number,semester:number):Observable<CourseReview>{
    return this.http
    .get<CourseReview>(this.baseUrl+"/course/"+course+"/section/"+section+"/semester/"+semester);
  }
}
