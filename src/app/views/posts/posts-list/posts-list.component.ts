import { Component, OnInit} from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service';
import { NgbModalConfig, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';







@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  adminDetails:  any = {};
  addform: FormGroup;
  submitted: boolean;
  items: any = [];
  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private modelService: NgbModal,
    private Toastr: ToastrService) { }
      onSubmit(){
      this.submitted = true;
      if(this.addform.invalid){
        return
      }
      this.postsService.addAdmin(this.addform.value).subscribe(res => {

        this.Toastr.success('Items deleted sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
        this.getAll();
        this.modelService.dismissAll();


      },
      err => {
        this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

      }


      );

    }

  ngOnInit(): void {
    this.getAll();
    this.buildAddFrom();
  }
  // get all
  getAll() {
    this.postsService.getAll().subscribe(res => {
      console.log(res);
      this.items = res;
    });
  }

  deleteadmin(model, id) {
    // this.modelService.open(model).result.then(result => {


    //this.postsService.deleteAdmin(id).subscribe(res => {
    // this.Toastr.success('Items deleted sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
    //},
    //err => {
    //console.log(err);
    //this.Toastr.error(err,'Rrror !',{timeOut: 3000, closeButton: true,progressBar: true });
    //}
    //);

    //},
    //reason => {
    // console.log(reason);
    // });
    this.modelService.open(model).result.then(result => {
      this.postsService.deleteAdmin(id).subscribe(res => {
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

  //to access inputs  form
  get Cform() {
    return this.addform.controls;
  }
  addAdmin(model) {
    this.modelService.open(model).result.then(result => {
      console.log(result);
    },
    reason => {
      console.log(reason);
    });
  }
  EditAdmin(model,id) {
   // this.modelService.open(model).result.then(result => {
     // console.log(result);
    //});
   // this.postsService.GetAdmin(id).subscribe(res => {

     // this.adminDetails = res;
    //});
    this.postsService.GetAdmin(id).subscribe(res => {
      this.adminDetails = res;
    });
    this.modelService.open(model, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    }, (reason) => {
      console.log(reason);
    });

    console.log(id);


  }

  // close modal

  //get Admin details
  getAdminDetails(id){
    this.postsService.GetAdmin(id).subscribe(res => {
   this.adminDetails = res;
    });
  }

  onEdit(id){
    this.submitted = true;
    if(this.addform.invalid){
      return
    }

    this.postsService.UpdateAdmin(this.addform.value,id).subscribe(res => {

     this.Toastr.success('Items deleted sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
     this.getAll();
     this.modelService.dismissAll();
    },
    err => {
      this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});

    }

    );

  }

  buildAddFrom() {
    this.addform = this.fb.group({
      Nom: [null,Validators.required],
      Email: [null,Validators.required],
      Numero: [null,Validators.required],
      Motpasse: [null,Validators.required],
    });
  }
}
