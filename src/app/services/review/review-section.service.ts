import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SectionReview } from 'src/app/model/sectionReview/section-review';

@Injectable({
  providedIn: 'root'
})
export class ReviewSectionService {

  private baseUrl:string = environment.baseUrl + "/course-review";

  constructor(private http:HttpClient) { }

  sendSectionReview(sectionReview: SectionReview): Observable<HttpResponse<any>>{
    let courseNumber = sectionReview.courseNumber;
    let sectionNumber = sectionReview.sectionNumber;
    let semester = sectionReview.semester;
    return this.http.post<any>
    (this.baseUrl+`/course/${courseNumber}/section/${sectionNumber}/semester/${semester}`
    ,sectionReview,{ observe : 'response'});
  }
}
