import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantsService } from 'src/app/shared/services/etudiants.service';

@Component({
  selector: 'app-password-etudiant',
  templateUrl: './password-etudiant.component.html',
  styleUrls: ['./password-etudiant.component.scss']
})
export class PasswordEtudiantComponent implements OnInit {

  addform: FormGroup;
  submitted: boolean;

  items: any = [];
  constructor(private fb: FormBuilder,
    private etudiantsService: EtudiantsService,
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
   
      this.etudiantsService.LoginEtudiant(this.addform.value).subscribe(res => {
        this.Toastr.success('Items login sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
        this.router.navigate(['./Etudiant']);
  
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
        Motpasse: [null,Validators.required],
        password: [null,Validators.required],
      });
    }
}
