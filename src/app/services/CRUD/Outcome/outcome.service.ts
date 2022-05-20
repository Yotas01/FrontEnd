import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { Outcome } from 'src/app/model/outcome/outcome';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  baseURL = Constants.baseUrl + "/admin/outcome";

  constructor(private http: HttpClient) { }

  get(outcomeId: number): Observable<HttpResponse<Outcome>>{
    return this.http.get<Outcome>(this.baseURL+"/"+outcomeId, { observe:'response'});
  }

  getAll(): Observable<HttpResponse<Outcome[]>>{
    return this.http.get<Outcome[]>(this.baseURL, { observe:'response'});
  }
}
