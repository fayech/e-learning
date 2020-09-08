import { Component, OnInit } from '@angular/core';
import { EnseignantsService } from './../../../shared/services/enseignants.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-singup-profile',
  templateUrl: './singup-profile.component.html',
  styleUrls: ['./singup-profile.component.scss']
})
export class SingupProfileComponent implements OnInit {

  enseignantDetails:  any = {};
  addform: FormGroup;
  submitted: boolean;

  items: any = [];
  constructor(private fb: FormBuilder,
    private EnseignantsService: EnseignantsService,
    private Toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.buildAddFrom();
  }

  get Cform() {
    return this.addform.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.addform.invalid){
      return
    }
    var formData: any = new FormData();
    formData.append("Nom", this.addform.get('Nom').value);
     formData.append("Prenom", this.addform.get('Prenom').value);
 
 
     formData.append("Image", this.addform.get('Image').value);
     formData.append("Email", this.addform.get('Email').value);
     formData.append("Motpasse", this.addform.get('Motpasse').value);
    console.log(formData);

    this.EnseignantsService.addEnseignant(formData).subscribe(res => {

      this.Toastr.success('Items Add sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
      this.router.navigate(['./auth/login']);


    },
    err => {
      this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }


    );

  }
  //upload file
 uploadFile(event) {
  const file = (event.target).files[0];
  this.addform.patchValue({
   Image: file
  });
  this.addform.get('Image').updateValueAndValidity()
  console.log(this.addform.value);
}
//
//get all etudiant after on submit
  buildAddFrom() {
    this.addform = this.fb.group({
      Nom: [null,Validators.required],
      Prenom: [null,Validators.required],
      Email: [null,Validators.required],
      Image: [null,Validators.required],
      Motpasse: [null,Validators.required]
    });
  }
}
