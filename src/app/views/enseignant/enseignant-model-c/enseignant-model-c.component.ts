import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClasseService } from './../../../shared/services/classe.service';

@Component({
  selector: 'app-enseignant-model-c',
  templateUrl: './enseignant-model-c.component.html',
  styleUrls: ['./enseignant-model-c.component.scss']
})
export class EnseignantModelCComponent implements OnInit {
  @Input() ClassId: any;
  addForm: FormGroup;
  submitted: boolean;

  ClassDetails : any = {};
   Class: any[];
   @Output() cl = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private ClasseService: ClasseService,
    private Toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildAddFrom();
    this.getClass(this.ClassId);
    this.getAllclasses();
  }
  buildAddFrom() {
    this.addForm = this.fb.group({
      Nom: [null,Validators.required],
      Niveau: [null,Validators.required],

    
  
    });
  }

  getClass(id) {
    // this.modelService.open(model).result.then(result => {
      // console.log(result);
     //});
     this.ClasseService.GetClasse(id).subscribe(res => {
       this.ClassDetails = res;
     });

     console.log(id);


   }

       //to access inputs  form

       get Cform() {
        return this.addForm.controls;
      }

        //submit update and add new Doc
  onSubmit(id){
    if(id === ''){
     this.submitted = true;
     if(this.addForm.invalid){
       return
     }
      this.addClass(this.addForm.value);
 
    }else{
       this.updateClass(this.addForm.value,id);
    }
 
   }
 //end-of update and add new Doc

 addClass(data){
 
  this.ClasseService.AddClasse(this.addForm.value).subscribe(
   res => {
            this.Toastr.success('Document add  Sucssefully','Success');
            this.getAllClass();
    },
    error => {
     this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }
  )

  
}
 // Update  updateDoc function
 updateClass(data,id){
  
  this.ClasseService.UpdateClasse(this.addForm.value,id).subscribe(
   res => {
            this.Toastr.success('Document Updated  Sucssefully','Success');
            this.getAllClass();

    },
    error => {
     this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }
  )

  
}
  //
  //get all classe after on submit
  getAllClass(){
    this.ClasseService.getAll().subscribe(res => {
      this.cl.emit(res);
    });
      }

//upload file


//get all Group after on submit
getAllclasses(){
  this.ClasseService.getAll().subscribe(res => {
    this.Class=res;
  });
    }

}