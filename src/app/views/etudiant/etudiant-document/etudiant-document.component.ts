import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GroupEtudiantService } from './../../../shared/services/group-etudiant.service';
import {saveAs} from 'file-saver';//pdf save
import { ToastrService } from 'ngx-toastr';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router,ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-etudiant-document',
  templateUrl: './etudiant-document.component.html',
  styleUrls: ['./etudiant-document.component.scss']
})
export class EtudiantDocumentComponent implements OnInit {
  Groups: any = [];
  Docs: any = [];
  users: any = [];
  DocDetails: any =[];
   niveau:string;
   paramsSubscription:Subscription;
   endpoint = 'http://localhost:3000/';

  constructor(
    private GroupEtudiantService: GroupEtudiantService,
    private modelService: NgbModal,
    private Toastr: ToastrService,
    private router: Router,
    private Activate:ActivatedRoute
    ) {

      this.paramsSubscription = this.Activate.params.subscribe((params: Params) => 
      { this.niveau = this.Activate.snapshot.params['Niveau']; 
    });
    
    
     }

  ngOnInit(): void {
    this.getAllGroupes();

  }
  getAllGroupes() {

    this.GroupEtudiantService.GetGroup(this.niveau).subscribe(res => {
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
     modalDoc(model,id) {
   
this.modelService.open(model).result.then(result => {
  
 
},
  reason => {
    console.log(reason);

  });
  this.GroupEtudiantService.GetGroupe(id).subscribe(res => {
    this.DocDetails = res;
  });
 
}

// model Event
}
