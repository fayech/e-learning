import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json'

    })
  };
  endpoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getAll():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallEtudiant');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  
  getAllNiveau():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallClasse');
  }
  public deleteEtudiant(id) {
    return this.http.delete(this.endpoint + 'deleteEtudiant/' + id,this.httpOptions);
  }
  //add new Etudiant
  public addEtudiant(data){
    return this.http.post(this.endpoint + 'Etudiantadd/',data);
  }
  // get id Etudiant
  public GetEtudiant(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetEtudiant/' + id);

  }
    public UpdateEtudiant(data,id) {
    return this.http.put(this.endpoint + 'UpdateEtudiant/' + id,data);
  }
  public TokenEtudiant() {
    return this.http.get(this.endpoint + 'EtudiantToken',{
      observe: 'body',
      params: new HttpParams().append('token',localStorage.getItem('token'))
    });
  }
  public LoginEtudiant(data) {
    return this.http.post(this.endpoint + 'LoginEtudiant',data);
  }
  public  GetEamil(data) {
    return this.http.post(this.endpoint + 'EmailEtudiant',data);
  }
  public  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
