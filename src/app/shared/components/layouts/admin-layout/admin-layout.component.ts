import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from "./../../../services/utilisateur.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  users: any = [];

  constructor(private utilisateurService: UtilisateurService,
    private router: Router
    ) {
      this.utilisateurService.GetUser().subscribe(
        data =>  this.users =  data,
        error => this.router.navigate([''])
      )
     }

  ngOnInit(): void {
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);

  }
}
