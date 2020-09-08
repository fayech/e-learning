import { Component, OnInit,ViewChild } from '@angular/core';
import { GroupEnseigService } from './../../../shared/services/group-enseig.service';
import {saveAs} from 'file-saver';//pdf save
import { ToastrService } from 'ngx-toastr';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-enseignant-group',
  templateUrl: './enseignant-group.component.html',
  styleUrls: ['./enseignant-group.component.scss']
})
export class EnseignantGroupComponent implements OnInit {
  Groups: any = [];
  Docs: any = [];
  addform: FormGroup;
  submitted: boolean;//add
  GroupId: any;
  DocId: any;
  GroupDetails:  any = {};
  DocDetails:  any = {};

  endpoint = 'http://localhost:3000/';

  constructor(private fb: FormBuilder,
    private GroupesService: GroupEnseigService,
    private modelService: NgbModal,
    private Toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllGroupes();
    this.getAllDocument();



  }
   //get all
//get all
getAllGroupes() {
  this.GroupesService.getAllGroupes().subscribe(res => {
    console.log(res);
    this.Groups = res;
  });
}
//get all
getAllDocument() {
  this.GroupesService.getAllDocument().subscribe(res => {
    console.log(res);
    this.Docs = res;
  });
}

download(index){
//  var filename = this.attachmentList[index].uploadname;

var file = new File(["Hello, world!"], index, {type: "text/plain;charset=utf-8"});
saveAs(file);
  //     saveAs(data, filename),

}
//delete Model Group 
DeleteGroup(model, id) {
  this.modelService.open(model).result.then(result => {
    this.GroupesService.deleteGroup(id).subscribe(res => {
      console.log(res);
      this.Toastr.success('Group deleted sucessfuly', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
      this.getAllGroupes();



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
//delete model Group


//delete Model Doc
DeleteDoc(model, id) {
  this.modelService.open(model).result.then(result => {
    this.GroupesService.deleteDocument(id).subscribe(res => {
      console.log(res);
      this.Toastr.success('Document deleted sucessfuly', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
      this.getAllDocument();



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
//delete model Doc
//modal add Group

//end-of modal add Group
//add Group
getUpdateGroup(updateGroup){
  this.Groups=updateGroup;
  this.modelService.dismissAll();
    }

//end-of add Group

 //add modalDoc
 getUpdateDoc(updateDoc){
  this.Docs=updateDoc;
  this.modelService.dismissAll();
    }

//end-of add doc

  //modal
  modalGroup(model,id) {
    this.modelService.open(model).result.then(result => {
      console.log(id);
    },
    reason => {
      console.log(reason);
    });
    this.GroupId =id;
    console.log(id);

  }
 //end-of modal add edit Group
 //end modal add edit Document 
 modalDoc(model,id) {
  this.modelService.open(model).result.then(result => {
    console.log(id);
  },
  reason => {
    console.log(reason);
  });
  this.DocId =id;
  console.log(id);

}
 //end-of modal add edit Document

 
buildAddFrom() {
  this.addform = this.fb.group({
    Nom: [null,Validators.required],
    nom_E: [null,Validators.required],

  });
}

  }


