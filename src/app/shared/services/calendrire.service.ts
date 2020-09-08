import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CalendrireService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  endpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getAllCalendrire():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getAllCalendrire');
  }
  public addCalendrire(data){
    return this.http.post(this.endpoint + 'addCalendrire/' ,data);
  }
  getAllGroupes():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallGroupes');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
}
