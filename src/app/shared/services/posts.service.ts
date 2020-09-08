import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  endpoint = 'http://localhost:3000/';


  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAll():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'AllAdmin');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  public deleteAdmin(id) {
    return this.http.delete(this.endpoint + 'deleteAdmin/' + id,this.httpOptions);
  }
  //add new admin
  public addAdmin(data){
    return this.http.post(this.endpoint + 'Addadmin/' ,data,this.httpOptions);
  }
  // get id
  public GetAdmin(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetAdmin/' + id);

  }
    public UpdateAdmin(data,id) {
    return this.http.put(this.endpoint + 'UpdateAdmin/' + id,data,this.httpOptions);
  }
  
  chartpieChart():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'NbEtudiant');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  enseignantpieChart():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'Nbenseignant');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  NbEtudiantTotal():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'NbEtudiantTotal');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  NbEnseignantTotal():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'NbEnseignantTotal');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  NbGroupesTotal():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'NbGroupesTotal');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  
}
