import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantsService } from 'src/app/shared/services/etudiants.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enseignant-model-e',
  templateUrl: './enseignant-model-e.component.html',
  styleUrls: ['./enseignant-model-e.component.scss']
})
export class EnseignantModelEComponent implements OnInit {

  @Input() itemsId: any;
  addForm: FormGroup;
   etudiantDetails : any = {};
   imageSrc: string;
   submitted: boolean;
   niveau: any[];
 
   @Output() etudiant = new EventEmitter<any>();
   constructor(private fb: FormBuilder,
     private etudiantsService: EtudiantsService,
     private Toastr: ToastrService
     ) { }
 
   ngOnInit(): void {
     this.buildAddForm();
     this.getEtudiant(this.itemsId);
     this.getAllNiveau();
   }
   //From 
   buildAddForm() {
     this.addForm = this.fb.group({
       Nom: [null,Validators.required],
       Prenom: [null,Validators.required],
       Email: [null,Validators.required],
       Image: [null,Validators.required],
       Connexion: [null,Validators.required],
       Niveau: [null,Validators.required],
       Motpasse: [null,Validators.required]
     });
   }
 
   getEtudiant(id) {
     // this.modelService.open(model).result.then(result => {
       // console.log(result);
      //});
      this.etudiantsService.GetEtudiant(id).subscribe(res => {
        this.etudiantDetails = res;
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
      this.addEtudiant(this.addForm.value);
 
    }else{
       this.updateEtudiant(this.addForm.value,id);
    }
 
   }
 // Add new etudiant
    addEtudiant(data){
     var formData: any = new FormData();
     formData.append("Nom", this.addForm.get('Nom').value);
      formData.append("Prenom", this.addForm.get('Prenom').value);
  
      formData.append("Niveau", this.addForm.get('Niveau').value);
 
      formData.append("Image", this.addForm.get('Image').value);
      formData.append("Email", this.addForm.get('Email').value);
      formData.append("Connexion", this.addForm.get('Connexion').value);
      formData.append("Motpasse", this.addForm.get('Motpasse').value);
      this.etudiantsService.addEtudiant(formData).subscribe(
       res => {
                this.Toastr.success('Etudiant add  Sucssefully','Success');
                this.getAlletudiant();
        },
        error => {
         this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});
 
        }
      )
 
      
    }
 
    // Update  etudiant function
    updateEtudiant(data,id){
     var formData: any = new FormData();
      formData.append("Nom", this.addForm.get('Nom').value);
      formData.append("Prenom", this.addForm.get('Prenom').value);
  
      formData.append("Niveau", this.addForm.get('Niveau').value);
      formData.append("Image", this.addForm.get('Image').value);
      formData.append("Email", this.addForm.get('Email').value);
      formData.append("Connexion", this.addForm.get('Connexion').value);
      formData.append("Motpasse", this.addForm.get('Motpasse').value);
     this.etudiantsService.UpdateEtudiant(formData,id).subscribe(
      res => {
               this.Toastr.success('Etudiant Updated  Sucssefully','Success');
               this.getAlletudiant();
 
       },
       error => {
        this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});
 
       }
     )
 
     
   }
     //
   //get all Group after on submit
   getAllNiveau(){
     this.etudiantsService.getAllNiveau().subscribe(res => {
       this.niveau = res;
 
     });
       }
 
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
   getAlletudiant(){
 this.etudiantsService.getAll().subscribe(res => {
   this.etudiant.emit(res);
 });
   }

}
