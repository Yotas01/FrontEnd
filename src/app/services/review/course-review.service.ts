import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CourseReview } from 'src/app/model/courseReview/course-review';
import { SectionReview } from 'src/app/model/sectionReview/section-review';

@Injectable({
  providedIn: 'root'
})
export class CourseReviewService { 

  private baseUrl:string = environment.baseUrl + "/course-review";

  constructor(private http:HttpClient) { }

  getCourseForReview(course:number,section:number,semester:number):Observable<HttpResponse<CourseReview>>{
    return this.http.get<CourseReview>
    (this.baseUrl+`/course/${course}/section/${section}/semester/${semester}`,{ observe : 'response'});
  }

  getSectionReview(course:number,section:number,semester:number):Observable<HttpResponse<SectionReview>>{
    return this.http.get<SectionReview>
    (this.baseUrl+`/section-review/course/${course}/section/${section}/semester/${semester}`,{ observe : 'response'});
  }
}
