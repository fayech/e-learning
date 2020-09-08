import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CalendrireService } from 'src/app/shared/services/calendrire.service';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enseignant-calendar',
  templateUrl: './enseignant-calendar.component.html',
  styleUrls: ['./enseignant-calendar.component.scss']
})
export class EnseignantCalendarComponent implements OnInit {
  maxDate = new Date();
  addform: FormGroup;
  submitted: boolean;
  events: any[]= [];

  group: any[];
  constructor(private fb: FormBuilder,
    private CalendrireService: CalendrireService,
    private modelService: NgbModal,
    private Toastr: ToastrService
    ) {
    
  }
  calendarPlugins = [dayGridPlugin]; // important!

  ngOnInit(): void {
    this.buildAddFrom();
    this.getAllCalendrire();
    this.getAllDocs();
  }
//modal
modalCalendar(model) {
  this.modelService.open(model).result.then(result => {
  },
  reason => {
    console.log(reason);
  });
  

}
getAllDocs(){
  this.CalendrireService.getAllGroupes().subscribe(res => {
    this.group=res;
  });
    }
getAllCalendrire(){
  this.CalendrireService.getAllCalendrire().subscribe(res => {
    console.log(res);
  
    for (let calendrire of res) {
      //  this.events=[({title: calendrire.Title, date: calendrire.start_date })];
     //this.events.push({'titre': calendrire.Title, 'start': calendrire.start_date});
   this.events = this.events.concat({title: calendrire.Title, start: calendrire.start_date,
    end: calendrire.end_date,color:calendrire.Color});
      //this.events=[({title: calendrire.Title, date: calendrire.start_date })];

    }

   console.log(this.events);
  
  });
  
    }
    onSubmit(){
      this.submitted = true;
      if(this.addform.invalid){
        return
      }
     
      this.CalendrireService.addCalendrire(this.addform.value).subscribe(res => {
    
        this.Toastr.success('Items add event sucessfuly', 'Success', { timeOut:3000,closeButton:true,progressBar:true});
        this.events =[];
        this.getAllCalendrire();
        this.modelService.dismissAll();
      

    
    
      },
      err => {
        this.Toastr.error(err,'Error !',{ timeOut:3000,closeButton:true,progressBar:true});
    
      }
    
    
      );
    
    }
    get Cform() {
      return this.addform.controls;
    }
    buildAddFrom() {
  this.addform = this.fb.group({
    Title: [null,Validators.required],
    Color: [null,Validators.required],
    nom_Groupe: [null,Validators.required],
    start_date: [null,Validators.required],
    end_date: [null,Validators.required],
  });
}




}
