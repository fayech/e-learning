import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EtudiantsService } from "./../../../shared/services/etudiants.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-etudiant-profil',
  templateUrl: './etudiant-profil.component.html',
  styleUrls: ['./etudiant-profil.component.scss']
})
export class EtudiantProfilComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  users: any = [];
  addForm: FormGroup;
  submitted: boolean;
  imageSrc: string;
  constructor( private EtudiantsService: EtudiantsService,
    private router: Router,
    private fb: FormBuilder,
    private Toastr: ToastrService) {
      this.EtudiantsService.TokenEtudiant().subscribe(
        data =>  this.users =  data,
        error => this.router.navigate(['/auth/loginEtudiant'])
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
      Niveau: [null],
    });
  }
  onSubmit(id){
    var formData: any = new FormData();
    formData.append("Nom", this.addForm.get('Nom').value);
    formData.append("Prenom", this.addForm.get('Prenom').value);

    formData.append("Niveau", this.addForm.get('Niveau').value);

    formData.append("Image", this.addForm.get('Image').value);
    formData.append("Email", this.addForm.get('Email').value);
    formData.append("Connexion", this.addForm.get('Connexion').value);
    formData.append("Motpasse", this.addForm.get('Motpasse').value);
   this.EtudiantsService.UpdateEtudiant(formData,id).subscribe(
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
