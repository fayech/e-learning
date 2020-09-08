import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantProfilComponent } from './etudiant-profil/etudiant-profil.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EtudiantCalendarComponent } from './etudiant-calendar/etudiant-calendar.component';
import { EtudiantDocumentComponent } from './etudiant-document/etudiant-document.component';
import { EtudiantQuestionComponent } from './etudiant-question/etudiant-question.component';
import { EtudiantChatComponent } from './etudiant-chat/etudiant-chat.component'; // for FullCalendar!

@NgModule({
  declarations: [EtudiantProfilComponent, EtudiantCalendarComponent, EtudiantDocumentComponent, EtudiantQuestionComponent, EtudiantChatComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FullCalendarModule,
    BsDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ]
})
export class EtudiantModule { }
