import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './../../../shared/services/utilisateur.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  enseignantDetails:  any = {};
  addform: FormGroup;
  submitted: boolean;

  items: any = [];
  constructor(private fb: FormBuilder,
    private UtilisateurService: UtilisateurService,
    private Toastr: ToastrService,
    private router:Router) { }



  ngOnInit(): void {
    this.buildAddFrom();
  }
  onSubmit(){
    this.submitted = true;
    if(this.addform.invalid){
      return
    }
    this.UtilisateurService.LoginUtilisateur(this.addform.value).subscribe(res => {
      this.Toastr.success('Items login sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
      localStorage.setItem('token',res.toString());
      this.router.navigate(['./admin']);


    },
    err => {
      this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }


    );

  }
  get Cform() {
    return this.addform.controls;
  }
  buildAddFrom() {
    this.addform = this.fb.group({
      Email: [null,Validators.required],
      Motpasse: [null,Validators.required]
    });
  }

}