import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { CDIOReportDTO } from 'src/app/model/report/cdioReportDTO/cdioreport-dto';
import { CourseReportDTO } from 'src/app/model/report/courseReportDTO/course-report-dto';
import { OutcomeReportDTO } from 'src/app/model/report/OutcomeReportDTO/outcome-report-dto';

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
  getCDIOReport(id: number, semester: number): Observable<HttpResponse<CDIOReportDTO>>{
    let url = this.baseURL+`/cdio/${id}/semester/${semester}`;
    return this.http.get<CDIOReportDTO>(url, {observe: 'response'});
  }
  getOutcomeReport(id: number, semester: number): Observable<HttpResponse<OutcomeReportDTO>>{
    let url = this.baseURL+`/outcome/${id}/semester/${semester}`;
    return this.http.get<OutcomeReportDTO>(url, {observe: 'response'});
  }
}
