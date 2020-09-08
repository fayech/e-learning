import { Component, OnInit,ViewChild } from '@angular/core';
import { EtudiantsService } from './../../../shared/services/etudiants.service';
import { NgbModalConfig, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enseignant-etudiant',
  templateUrl: './enseignant-etudiant.component.html',
  styleUrls: ['./enseignant-etudiant.component.scss']
})
export class EnseignantEtudiantComponent implements OnInit {
  imageSrc: string;
  itemId: any;
  etudiantDetails:  any = {};
  addform: FormGroup;
  submitted: boolean;
  items: any = [];
  selectedImage:any = null;
  constructor(private fb: FormBuilder,
    private etudiantsService: EtudiantsService,
    private modelService: NgbModal,
    private Toastr: ToastrService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
    this.buildAddFrom();
  }
  getAll() {
    this.etudiantsService.getAll().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }
  //modal
  viewEtudiant(model,id) {
    console.log(id);
  this.modelService.open(model).result.then(result => {
    
  },
  reason => {
    console.log(reason);
  });
  this.etudiantsService.GetEtudiant(id).subscribe(res => {
    this.etudiantDetails = res;
  });
  console.log(this.etudiantDetails);

}
  deleteEtudiant(model, id) {
    this.modelService.open(model).result.then(result => {
      this.etudiantsService.deleteEtudiant(id).subscribe(res => {
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

 
 

   //modal
   modalEtudiant(model,id) {
    this.modelService.open(model).result.then(result => {
      console.log(id);
    },
    reason => {
      console.log(reason);
    });
    this.itemId =id ;
    console.log(id);

  }
 //end-of modal add etudiant
  buildAddFrom() {
    this.addform = this.fb.group({
      Nom: [null,Validators.required],
      Prenom: [null,Validators.required],
      Email: [null,Validators.required],
      Image: [null,Validators.required],
      Connexion: [null,Validators.required],
      Motpasse: [null,Validators.required]
    });
  }
  getUpdateEtudiant(updateetudiant){
this.items=updateetudiant;
this.modelService.dismissAll();
  }

}
