import { Component, OnInit,ViewChild } from '@angular/core';
import { ClasseService } from './../../../shared/services/classe.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-enseignant-classe',
  templateUrl: './enseignant-classe.component.html',
  styleUrls: ['./enseignant-classe.component.scss']
})
export class EnseignantClasseComponent implements OnInit {
  Classe: any = [];
  addform: FormGroup;
  submitted: boolean;//add
  ClasseId: any;
  ClassDetails:  any = {};
  constructor(private fb: FormBuilder,
    private classeService: ClasseService,
    private modelService: NgbModal,
    private Toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllClasse();
  }

  //delete Model Doc
  DeleteClasse(model, id) {
  this.modelService.open(model).result.then(result => {
    this.classeService.deleteClasse(id).subscribe(res => {
      console.log(res);
      this.Toastr.success('Document deleted sucessfuly', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
      this.getAllClasse();



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
getAllClasse() {
  this.classeService.getAll().subscribe(res => {
    console.log(res);
    this.Classe = res;
  });
}
getUpdateClasse(updateClasse){
  this.Classe=updateClasse;
  this.modelService.dismissAll();
    }
//delete model Doc
modalClasse(model,id) {
  this.modelService.open(model).result.then(result => {
    console.log(id);
  },
  reason => {
    console.log(reason);
  });
  this.ClasseId =id;
  console.log(id);

}
 //end-of modal add edit Document
}
