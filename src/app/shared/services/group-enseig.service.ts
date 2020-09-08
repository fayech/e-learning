import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GroupEnseigService {
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json'

    })
  };
  endpoint = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  getAllGroupes():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallGroupes');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  public deleteGroup(id) {
    return this.http.delete(this.endpoint + 'deleteGroup/' + id,this.httpOptions);
  }
  //add new Group
  public addGroup(data){
    return this.http.post(this.endpoint + 'AddGroupes/',data);
  }
  // get id Group
  public GetGroup(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetGroupe/' + id);

  }
  //Update Group
    public UpdateGroup(data,id) {
    return this.http.put(this.endpoint + 'UpdateGroupe/' + id,data,this.httpOptions);
  }

  getAllDocument():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallDocument');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
  public deleteDocument(id) {
    return this.http.delete(this.endpoint + 'deleteDocument/' + id,this.httpOptions);
  }
  //add new Document
  public addDocument(data){
    return this.http.post(this.endpoint + 'Documentadd/',data);
  }
  // get id Document
  public GetDocument(id: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'GetDocument/' + id);

  }
  //Update Document
    public UpdateDocument(data,id) {
    return this.http.put(this.endpoint + 'UpdateDocument/' + id,data);
  }
  //
  getAllEnseignant():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallEnseignant');
    //return this.http.get(`${environment.apiUrl}/posts`, this.httpOptions);
  }
 
  getAllNiveau():Observable<any[]> {

    return this.http.get<any[]>(this.endpoint+ 'getallClasse');
  }

  // get id Group
  public infoGroup(nom: string):Observable<any>{
    return this.http.get<any>(this.endpoint + 'infoEnseignant/' + nom);

  }

}
