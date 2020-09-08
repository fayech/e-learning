import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnseignantsService } from './../../../shared/services/enseignants.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-enseignant',
  templateUrl: './modal-enseignant.component.html',
  styleUrls: ['./modal-enseignant.component.scss']
})
export class ModalEnseignantComponent implements OnInit {
  @Input() itemsId: any;
  addForm: FormGroup;
   enseignatDetails : any = {};
   imageSrc: string;
   submitted: boolean;
   @Output() enseignat = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
    private enseignantsService: EnseignantsService,
    private Toastr: ToastrService) { }

  ngOnInit(): void {
    this.buildAddFrom();
    this.getEnseignant(this.itemsId);
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

  
  getEnseignant(id) {
    // this.modelService.open(model).result.then(result => {
      // console.log(result);
     //});
     this.enseignantsService.GetEnseignant(id).subscribe(res => {
       this.enseignatDetails = res;
     });

     console.log(id);


   }

       //to access inputs  form
  get Cform() {
    return this.addForm.controls;
  }
   onSubmit(id){
   if(id === ''){
    this.submitted = true;
    if(this.addForm.invalid){
      return
    }
     this.addEnseignant(this.addForm.value);

   }else{
      this.updateEnseignant(this.addForm.value,id);
   }

  }
// Add new Enseignant
//Add new etudiant
addEnseignant(data){
    var formData: any = new FormData();
    formData.append("Nom", this.addForm.get('Nom').value);
     formData.append("Prenom", this.addForm.get('Prenom').value);
 
 
     formData.append("Image", this.addForm.get('Image').value);
     formData.append("Email", this.addForm.get('Email').value);
     formData.append("Connexion", this.addForm.get('Connexion').value);
     formData.append("Motpasse", this.addForm.get('Motpasse').value);
     this.enseignantsService.addEnseignant(formData).subscribe(
      res => {
               this.Toastr.success('Etudiant add  Sucssefully','Success');
               this.getAllEnseignant();
       },
       error => {
        this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

       }
     )

     
   }
   // Update  etudiant function
   updateEnseignant(data,id){

    var formData: any = new FormData();
     formData.append("Nom", this.addForm.get('Nom').value);
     formData.append("Prenom", this.addForm.get('Prenom').value);
 
 
     formData.append("Image", this.addForm.get('Image').value);
     formData.append("Email", this.addForm.get('Email').value);
     formData.append("Connexion", this.addForm.get('Connexion').value);
     formData.append("Motpasse", this.addForm.get('Motpasse').value);
    this.enseignantsService.UpdateEnseignant(formData,id).subscribe(
     res => {
              this.Toastr.success('Enseignant Updated  Sucssefully','Success');
              this.getAllEnseignant();

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
//get all etudiant after on submit

getAllEnseignant(){
  this.enseignantsService.getAll().subscribe(res => {
    this.enseignat.emit(res);
  });
    }
}
