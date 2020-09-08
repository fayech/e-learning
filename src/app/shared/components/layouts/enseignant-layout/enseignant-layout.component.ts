import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from "./../../../services/utilisateur.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-enseignant-layout',
  templateUrl: './enseignant-layout.component.html',
  styleUrls: ['./enseignant-layout.component.scss']
})
export class EnseignantLayoutComponent implements OnInit {
  users: any = [];

  constructor(private utilisateurService: UtilisateurService,
    private router: Router
    ) {
      this.utilisateurService.GetUser().subscribe(
        data =>  this.users =  data,
        error => this.router.navigate(['/auth/loginEnseignant'])
      )
     }

  ngOnInit(): void {
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/loginEnseignant']);

  }
}