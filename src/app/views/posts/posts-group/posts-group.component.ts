import { Component, OnInit,ViewChild } from '@angular/core';
import { GroupEnseigService } from './../../../shared/services/group-enseig.service';
import {saveAs} from 'file-saver';//pdf save
import { ToastrService } from 'ngx-toastr';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-group',
  templateUrl: './posts-group.component.html',
  styleUrls: ['./posts-group.component.scss']
})
export class PostsGroupComponent implements OnInit {

  Groups: any = [];
 

  endpoint = 'http://localhost:3000/';

  constructor(
    private GroupesService: GroupEnseigService,
    ) { }

  ngOnInit(): void {
    this.getAllGroupes();
  }
  getAllGroupes() {
    this.GroupesService.getAllGroupes().subscribe(res => {
      console.log(res);
      this.Groups = res;
    });
  }
}
