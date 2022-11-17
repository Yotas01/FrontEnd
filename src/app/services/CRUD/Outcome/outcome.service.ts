import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Outcome } from 'src/app/model/outcome/outcome';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  baseURL = environment.baseUrl + "/admin/outcome";

  constructor(private http: HttpClient) { }

  get(outcomeId: number): Observable<HttpResponse<Outcome>>{
    return this.http.get<Outcome>(this.baseURL+"/"+outcomeId, { observe:'response'});
  }

  getAll(): Observable<HttpResponse<Outcome[]>>{
    return this.http.get<Outcome[]>(this.baseURL, { observe:'response'});
  }

  createOutcome(outcome: Outcome): Observable<HttpResponse<Outcome>>{
    return this.http.post<Outcome>(this.baseURL,outcome, { observe: 'response'});
  }

  deleteOutcome(outcomeId: number): Observable<HttpResponse<Outcome>>{
    return this.http.delete<Outcome>(this.baseURL+"/"+outcomeId, { observe: 'response'});
  }

  updateOutcome(outcome: Outcome): Observable<HttpResponse<Outcome>>{
    return this.http.put<Outcome>(this.baseURL+"/"+outcome.id,outcome, { observe: 'response'});
  }
}
