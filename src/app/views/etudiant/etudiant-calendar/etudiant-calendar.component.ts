import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendrireService } from 'src/app/shared/services/calendrire.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-etudiant-calendar',
  templateUrl: './etudiant-calendar.component.html',
  styleUrls: ['./etudiant-calendar.component.scss']
})
export class EtudiantCalendarComponent implements OnInit {
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  events: any[]= [];

  constructor(private CalendrireService: CalendrireService,
    private modelService: NgbModal,

    ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
   }
  calendarPlugins = [dayGridPlugin]; // important!
  ngOnInit(): void {
    this.getAllCalendrire();

  }
  getAllCalendrire(){
    this.CalendrireService.getAllCalendrire().subscribe(res => {
      console.log(res);
    
      for (let calendrire of res) {
        //  this.events=[({title: calendrire.Title, date: calendrire.start_date })];
       //this.events.push({'titre': calendrire.Title, 'start': calendrire.start_date});
     this.events = this.events.concat({title: calendrire.Title, start:calendrire.start_date,end: calendrire.end_date,color:calendrire.Color,});
        //this.events=[({title: calendrire.Title, date: calendrire.start_date })];
  
      }
     console.log(this.events);
    
    });
      }

      handleDateClick(arg) { // handler method
        alert(arg.dateStr);
      }

      // Model Event 
      modalevent(model, eventIndex) {
        console.log(event);
        this.events[eventIndex].title;
  this.modelService.open(model).result.then(result => {
 
  },
    reason => {
      console.log(reason);

    });
}
// model Event
}
