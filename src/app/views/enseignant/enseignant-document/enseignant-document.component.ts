import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupEnseigService } from './../../../shared/services/group-enseig.service';
import {saveAs} from 'file-saver';//pdf save
import { ToastrService } from 'ngx-toastr';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enseignant-document',
  templateUrl: './enseignant-document.component.html',
  styleUrls: ['./enseignant-document.component.scss']
})
export class EnseignantDocumentComponent implements OnInit {
  paramsSubscription:Subscription;
  endpoint = 'http://localhost:3000/';
  nom:string;
  Groups: any = [];
  GroupDetails:  any = {};
  Docs: any = [];
  DocDetails:  any = {};
  DocId: any;

  GroupId: any;

  constructor( private GroupEnseigService: GroupEnseigService,
    private modelService: NgbModal,
    private Toastr: ToastrService,
    private router: Router,
    private Activate:ActivatedRoute) {

      this.paramsSubscription = this.Activate.params.subscribe((params: Params) => 
      { this.nom = this.Activate.snapshot.params['nom']; 
    });
     }

  ngOnInit(): void {
    this.getAllGroupes();
  }
  getAllGroupes() {

    this.GroupEnseigService.infoGroup(this.nom).subscribe(res => {
      this.Groups = res;
    });
  }

  download(index){
    //  var filename = this.attachmentList[index].uploadname;
    
    var file = new File(["Hello, world!"], index, {type: "text/plain;charset=utf-8"});
    saveAs(file);
      //     saveAs(data, filename),
    
    }
    openDoc(pdfUrl: string, startPage: number ) {
      window.open(pdfUrl  + startPage);
    }
     // Model Event 
     getUpdateGroup(updateGroup){
      this.Groups=updateGroup;
      this.modelService.dismissAll();
        }
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

       getUpdateDoc(updateDoc){
        this.Groups=updateDoc;
        this.modelService.dismissAll();
          }
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


 //delete Model Group 
DeleteGroup(model, id) {
  this.modelService.open(model).result.then(result => {
    this.GroupEnseigService.deleteGroup(id).subscribe(res => {
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
    this.GroupEnseigService.deleteDocument(id).subscribe(res => {
      console.log(res);
      this.Toastr.success('Document deleted sucessfuly', 'Success', { timeOut: 3000, closeButton: true, progressBar: true });
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
//delete model Doc

      }
//add modalDoc

