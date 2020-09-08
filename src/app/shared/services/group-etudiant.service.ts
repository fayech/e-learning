import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupEtudiantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'

    })
  };
  endpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  public GetGroup(Niveau):Observable<any>{
    return this.http.get<any>(this.endpoint + 'infoGroup/' + Niveau);

  }
  public TokenEtudiant() {
    return this.http.get(this.endpoint + 'EtudiantToken',{
      observe: 'body',
      params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
   // get id Document
   public GetGroupe(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetGroupe/' + id);

  }

}
