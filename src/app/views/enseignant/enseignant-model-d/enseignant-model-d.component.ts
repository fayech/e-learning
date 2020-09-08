import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GroupEnseigService } from './../../../shared/services/group-enseig.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enseignant-model-d',
  templateUrl: './enseignant-model-d.component.html',
  styleUrls: ['./enseignant-model-d.component.scss']
})
export class EnseignantModelDComponent implements OnInit {
  @Input() DocsId: any;
  addForm: FormGroup;
  submitted: boolean;
  paramsSubscription:Subscription;
  nom:string;
  @Output() Group = new EventEmitter<any>();

   DocDetails : any = {};
   Docs: any[];
   @Output() Doc = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private DocsService: GroupEnseigService,
    private Toastr: ToastrService,
    private Activate:ActivatedRoute
  ) { 
    this.paramsSubscription = this.Activate.params.subscribe((params: Params) => 
    { this.nom = this.Activate.snapshot.params['nom']; 
  });
  }

  ngOnInit(): void {
    this.buildAddFrom();
    this.getDoc(this.DocsId);
    this.getAllDocs();

  }
  buildAddFrom() {
    this.addForm = this.fb.group({
      Nom: [null,Validators.required],
      url: [null,Validators.required],
      nom_Groupe: [null,Validators.required],

    
  
    });
  }

  getDoc(id) {
    // this.modelService.open(model).result.then(result => {
      // console.log(result);
     //});
     this.DocsService.GetDocument(id).subscribe(res => {
       this.DocDetails = res;
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
      this.addDoc(this.addForm.value);
 
    }else{
       this.updateDoc(this.addForm.value,id);
    }
 
   }
 //end-of update and add new Doc

 addDoc(data){
  var formData: any = new FormData();

    formData.append("Nom", this.addForm.get('Nom').value);
 
 
     formData.append("url", this.addForm.get('url').value);
     formData.append("nom_Groupe", this.addForm.get('nom_Groupe').value);
  this.DocsService.addDocument(formData).subscribe(
   res => {
            this.Toastr.success('Document add  Sucssefully','Success');
            this.getAllGroup();
    },
    error => {
     this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }
  )

  
}
 // Update  updateDoc function
 updateDoc(data,id){
  var formData: any = new FormData();

  formData.append("Nom", this.addForm.get('Nom').value);


   formData.append("url", this.addForm.get('url').value);
   formData.append("nom_Groupe", this.addForm.get('nom_Groupe').value);
  this.DocsService.UpdateDocument(formData,id).subscribe(
   res => {
            this.Toastr.success('Document Updated  Sucssefully','Success');
            this.getAllGroup();

    },
    error => {
     this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }
  )

  
}


//get all Group after on submit

    getAllGroup(){
      this.DocsService.infoGroup(this.nom).subscribe(res => {
        this.Group.emit(res);
      });
        }
  
  //
  //get all Doc after on submit
  getAllDoc(){
    this.DocsService.getAllDocument().subscribe(res => {
      this.Doc.emit(res);
    });
      }

//upload file
uploadFile(event) {
  const file = (event.target).files[0];
  this.addForm.patchValue({
    url: file
  });
  this.addForm.get('url').updateValueAndValidity()
  console.log(this.addForm.value);
}

//get all Group after on submit
getAllDocs(){
  this.DocsService.getAllGroupes().subscribe(res => {
    this.Docs=res;
  });
    }

}
