import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { EtudiantsService } from 'src/app/shared/services/etudiants.service';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private _authService: EtudiantsService,private _router:Router){}
 canActivate(): boolean{
   if(this._authService.loggedIn()){
     return true;
   }else {
     this._router.navigate(['']);
     return false;
   }
 }
  
}
