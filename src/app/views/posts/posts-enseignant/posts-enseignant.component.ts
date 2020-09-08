import { Component, OnInit,ViewChild } from '@angular/core';
import { EnseignantsService } from './../../../shared/services/enseignants.service';
import { NgbModalConfig, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-enseignant',
  templateUrl: './posts-enseignant.component.html',
  styleUrls: ['./posts-enseignant.component.scss']
})
export class PostsEnseignantComponent implements OnInit {
  @ViewChild('childModal') public childModal:ModalDismissReasons;


  addform: FormGroup;
  submitted: boolean;
  itemId: any;
  enseignatDetails:  any = {};
  items: any = [];

  imageSrc: string;



selectedImage:any = null;



  @ViewChild('closebutton') closebutton;


  constructor(private fb: FormBuilder,
    private EnseignantsService: EnseignantsService,
    private modelService: NgbModal,
    private Toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
    this.buildAddFrom();

  }
   //get all
   getAll() {
    this.EnseignantsService.getAll().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }
  get Cform() {
    return this.addform.controls;
  }
    //modal add addEnseignant
    addEnseignant(model) {
      this.modelService.open(model).result.then(result => {
        console.log(result);
      },
      reason => {
        console.log(reason);
      });
    }

    EditEnseignant(model,id) {
      // this.modelService.open(model).result.then(result => {
        // console.log(result);
       //});
       this.EnseignantsService.GetEnseignant(id).subscribe(res => {
         this.enseignatDetails = res;
       });
       this.modelService.open(model, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {



       }, (reason) => {
         console.log(reason);
       });
       console.log(id);


     }

     onEdit(id){
      this.submitted = true;
      if(this.addform.invalid){
        return
      }
      console.log(this.addform.value);
      this.EnseignantsService.UpdateEnseignant(this.addform.value,id).subscribe(res => {

       this.Toastr.success('Items deleted sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});

      this.getAll();
         this.modelService.dismissAll();


      },
      err => {
        this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

      }


      );

    }


    deleteEnseignant(model, id) {
      this.modelService.open(model).result.then(result => {
        this.EnseignantsService.deleteEnseignant(id).subscribe(res => {
          console.log(res);
          this.Toastr.success('Items deleted sucessfuly', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
          this.getAll();


        },
          err => {
            console.log(err);
            this.Toastr.error(err, 'Error !', { timeOut: 3000, closeButton: true, progressBar: true });

          }
        );
      },
        reason => {
          console.log(reason);

        });
    }

    onSubmit(){
      this.submitted = true;
      if(this.addform.invalid){
        return
      }
      this.EnseignantsService.addEnseignant(this.addform.value).subscribe(res => {

        this.Toastr.success('Items deleted sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});

        this.getAll();
        this.modelService.dismissAll();


      },
      err => {
        this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

      }


      );

    }
    
    //modal
    modalEnseignant(model,id) {
      this.modelService.open(model).result.then(result => {
        console.log(id);
      },
      reason => {
        console.log(reason);
      });
      this.itemId =id ;
      console.log(id);
  
    }
   //end-of modal add 
  buildAddFrom() {
    this.addform = this.fb.group({
      Nom: [null,Validators.required],
      Prenom: [null,Validators.required],
      Email: [null,Validators.required],
      Image: [null,Validators.required],
      Connexion: [null,Validators.required],
      Motpasse: [null,Validators.required],
    });
  }
  getUpdateEnseignant(updateenseignant){
    this.items=updateenseignant;
    this.modelService.dismissAll();
      }
}
