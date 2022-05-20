import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { Report } from 'src/app/model/report/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private baseURL = Constants.baseUrl + "/admin/report";

  constructor(private http: HttpClient) { }

  getReport(reportType: string, id: number, semester: number): Observable<HttpResponse<Report>>{
    let url = this.baseURL+`/${reportType}/${id}/semester/${semester}`;
    return this.http.get<Report>(url, {observe: 'response'});
  }
}
