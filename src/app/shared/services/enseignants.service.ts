import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  endpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAll():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallEnseignant');
    //return this.http.get(`${environment.apiUrl}/getallEnseignant`, this.httpOptions);
  }
  public deleteEnseignant(id) {
    return this.http.delete(this.endpoint + 'deleteEnseignant/' + id,this.httpOptions);
  }
  //add new Enseignant
  public addEnseignant(data){
    return this.http.post(this.endpoint + 'AddEnseignant/' ,data);
  }
  // get id Enseignant
  public GetEnseignant(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetEnseignant/' + id);

  }
  public UpdateEnseignant(data,id) {
    return this.http.put(this.endpoint + 'UpdateEnseignant/' + id,data);
  }
}
