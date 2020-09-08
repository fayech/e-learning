import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  endpoint = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getAll():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallClasse');
    //return this.http.get(`${environment.apiUrl}/getallEnseignant`, this.httpOptions);
  }
  public deleteClasse(id) {
    return this.http.delete(this.endpoint + 'deleteClasse/' + id,this.httpOptions);
  }
  //add new Enseignant
  public AddClasse(data){
    return this.http.post(this.endpoint + 'AddClasse/' ,data);
  }
  // get id Enseignant
  public GetClasse(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetClasse/' + id);

  }
  public UpdateClasse(data,id) {
    return this.http.put(this.endpoint + 'UpdateClasse/' + id,data);
  }
}
