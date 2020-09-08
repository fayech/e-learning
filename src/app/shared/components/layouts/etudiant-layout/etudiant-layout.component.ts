import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from "./../../../services/etudiants.service";

import { Router } from "@angular/router";

@Component({
  selector: 'app-etudiant-layout',
  templateUrl: './etudiant-layout.component.html',
  styleUrls: ['./etudiant-layout.component.scss']
})
export class EtudiantLayoutComponent implements OnInit {
  users: any = [];

  constructor(private etudiantsService: EtudiantsService,
    private router: Router
    ) {
      this.etudiantsService.TokenEtudiant().subscribe(
        data =>  {this.users =  data;
         
        },
        

        error => this.router.navigate(['/auth/loginEtudiant'])
      )
     

     }
   


  ngOnInit(): void {
  }
  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/loginEtudiant']);

  }
}
