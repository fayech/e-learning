import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  endpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
 

  getAll():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'AllUtilisateur');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  public deleteUtilisateur(id) {
    return this.http.delete(this.endpoint + 'deleteUtilisateur/' + id,this.httpOptions);
  }
  //add new admin
  public addUtilisateur(data){
    return this.http.post(this.endpoint + 'AddUtilisateur/' ,data,this.httpOptions);
  }
  // get id
  public GetUtilisateur(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetUtilisateur/' + id);

  }
    public UpdateUtilisateur(data,id) {
    return this.http.put(this.endpoint + 'UpdateUtilisateur/' + id,data,this.httpOptions);
  }
  public LoginEnseignant(data) {
    return this.http.post(this.endpoint + 'LoginEnseignant',data);
  }
  public GetUser() {
    return this.http.get(this.endpoint + 'EnseignantToken',{
      observe: 'body',
      params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
  public UpdateEnseignant(data,id) {
    return this.http.put(this.endpoint + 'UpdateEnseignant/' + id,data);
  }

  public LoginUtilisateur(data) {
    return this.http.post(this.endpoint + 'LoginUtilisateur',data);
  }
  public TokenUtilisateur() {
    return this.http.get(this.endpoint + 'UtilisateurToken',{
      observe: 'body',
      params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
}
