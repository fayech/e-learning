import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtudiantsService } from 'src/app/shared/services/etudiants.service';

@Component({
  selector: 'app-email-etudiant',
  templateUrl: './email-etudiant.component.html',
  styleUrls: ['./email-etudiant.component.scss']
})
export class EmailEtudiantComponent implements OnInit {
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
      this.etudiantsService.GetEamil(this.addform.value).subscribe(res => {
        this.Toastr.success('Items login sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
        this.router.navigate(['/auth/loginEtudiant']);
       
  
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
       
      });
    }
}
