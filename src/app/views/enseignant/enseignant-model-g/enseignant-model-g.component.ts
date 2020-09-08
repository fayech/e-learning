import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GroupEnseigService } from './../../../shared/services/group-enseig.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-enseignant-model-g',
  templateUrl: './enseignant-model-g.component.html',
  styleUrls: ['./enseignant-model-g.component.scss']
})
export class EnseignantModelGComponent implements OnInit {
  @Input() GroupsId: any;
  @Input() nomE: String;
  addForm: FormGroup;
   GroupDetails : any = {};
   @Output() Group = new EventEmitter<any>();

    submitted: boolean;
    Ense: any[];
    niveau:any[];
    paramsSubscription:Subscription;
    nom:string;

  constructor(
    private fb: FormBuilder,
    private GroupsService: GroupEnseigService,
    private Toastr: ToastrService,
    private Activate:ActivatedRoute

  ) {
    this.paramsSubscription = this.Activate.params.subscribe((params: Params) => 
    { this.nom = this.Activate.snapshot.params['nom']; 
  });
   }

  ngOnInit(): void {
    this.buildAddFrom();
    this.getGroup(this.GroupsId);
    this.getAllEnseignant();
    this.getAllNiveau();
  }
  buildAddFrom() {
    this.addForm = this.fb.group({
      Nom: [null,Validators.required],
      nom_E: [null,Validators.required],
      niveau: [null,Validators.required],
    });
  }
  //get all Group after on submit
  getAllNiveau(){
    this.GroupsService.getAllNiveau().subscribe(res => {
      this.niveau = res;

    });
      }
  getGroup(id) {
    // this.modelService.open(model).result.then(result => {
      // console.log(result);
     //});
     this.GroupsService.GetGroup(id).subscribe(res => {
       this.GroupDetails = res;
     });

     console.log(id);


   }

       //to access inputs  form
  get Cform() {
    return this.addForm.controls;
  }
  //add new Group
  onSubmit(id){
    if(id === ''){
     this.submitted = true;
     if(this.addForm.invalid){
       return
     }
      this.addGroup(this.addForm.value);
 
    }else{
       this.updateGroup(this.addForm.value,id);
    }
 
   }
 //end-of Add new Group
 addGroup(data){
 
   this.GroupsService.addGroup(data).subscribe(
    res => {
             this.Toastr.success('Group add  Sucssefully','Success');
             this.getAllGroup();
     },
     error => {
      this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

     }
   )

   
 }

 // Update  Group function
 updateGroup(data,id){
  
  this.GroupsService.UpdateGroup(data,id).subscribe(
   res => {
            this.Toastr.success('Group Updated  Sucssefully','Success');
            this.getAllGroup();

    },
    error => {
     this.Toastr.error(error,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }
  )

  
}
  //
  //get all Group after on submit
  getAllGroup(){
    this.GroupsService.infoGroup(this.nom).subscribe(res => {
      this.Group.emit(res);
    });
      }

//

  //
  //get all Group after on submit
  getAllEnseignant(){
    this.GroupsService.getAllEnseignant().subscribe(res => {
      this.Ense = res;

    });
      }
}
