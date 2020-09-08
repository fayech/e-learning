import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilisateurService } from "./../../../shared/services/utilisateur.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-enseignant-profil',
  templateUrl: './enseignant-profil.component.html',
  styleUrls: ['./enseignant-profil.component.scss']
})
export class EnseignantProfilComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  users: any = [];
  addForm: FormGroup;
  submitted: boolean;
  imageSrc: string;



  constructor( private utilisateurService: UtilisateurService,
    private router: Router,
    private fb: FormBuilder,
    private Toastr: ToastrService) {
      this.utilisateurService.GetUser().subscribe(
        data =>  this.users =  data,
        error => this.router.navigate(['/auth/login'])
      )
     }

  ngOnInit(): void {
    this.buildAddFrom();
  }
  get Cform() {
    return this.addForm.controls;
  }
  buildAddFrom() {
    this.addForm = this.fb.group({
      Nom: [null,Validators.required],
      Prenom: [null,Validators.required],
      Email: [null,Validators.required],
      Image: [null,Validators.required],
      Connexion: [null,Validators.required],
      Motpasse: [null,Validators.required],
    });
  }

 
 
  onSubmit(id){
    var formData: any = new FormData();
    formData.append("Nom", this.addForm.get('Nom').value);
    formData.append("Prenom", this.addForm.get('Prenom').value);


    formData.append("Image", this.addForm.get('Image').value);
    formData.append("Email", this.addForm.get('Email').value);
    formData.append("Connexion", this.addForm.get('Connexion').value);
    formData.append("Motpasse", this.addForm.get('Motpasse').value);
   this.utilisateurService.UpdateEnseignant(formData,id).subscribe(
    res => {
             this.Toastr.success('Enseignant Updated  Sucssefully','Success');
             this.router.navigate(['/auth/login']);
     },
     error => {
      this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

     }
   )

   
    }
    //upload file
  //upload file
  uploadFile(event) {
    const file = (event.target).files[0];
    this.addForm.patchValue({
     Image: file
    });
    this.addForm.get('Image').updateValueAndValidity()
    console.log(this.addForm.value);
  }
  //
  
   }

   // Update  etudiant function
   
  //upload file

