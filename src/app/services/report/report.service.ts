import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { CDIOSummary } from 'src/app/model/report/cdioSummary/cdio-summary';
import { CourseReportDTO } from 'src/app/model/report/courseReportDTO/course-report-dto';
import { OutcomeSummary } from 'src/app/model/report/OutcomeSummary/outcome-summary';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = Constants.baseUrl + "/admin/report";

  constructor(private http: HttpClient) { }

  getCourseReport(id: number, semester: number): Observable<HttpResponse<CourseReportDTO>>{
    let url = this.baseURL+`/course/${id}/semester/${semester}`;
    return this.http.get<CourseReportDTO>(url, {observe: 'response'});
  }
  getCDIOReport(id: number, semester: number): Observable<HttpResponse<CDIOSummary>>{
    let url = this.baseURL+`/cdio/${id}/semester/${semester}`;
    return this.http.get<CDIOSummary>(url, {observe: 'response'});
  }
  getOutcomeReport(id: number, semester: number): Observable<HttpResponse<OutcomeSummary>>{
    let url = this.baseURL+`/outcome/${id}/semester/${semester}`;
    return this.http.get<OutcomeSummary>(url, {observe: 'response'});
  }
}
