import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantProfilComponent } from './enseignant-profil/enseignant-profil.component';
import { EnseignantGroupComponent } from './enseignant-group/enseignant-group.component';
import { EnseignantCalendarComponent } from './enseignant-calendar/enseignant-calendar.component';
import { EnseignantModelGComponent } from './enseignant-model-g/enseignant-model-g.component';
import { EnseignantModelDComponent } from './enseignant-model-d/enseignant-model-d.component';
import { EnseignantClasseComponent } from './enseignant-classe/enseignant-classe.component';
import { EnseignantModelCComponent } from './enseignant-model-c/enseignant-model-c.component';
import { EnseignantDocumentComponent } from './enseignant-document/enseignant-document.component';
import { EnseignantEtudiantComponent } from './enseignant-etudiant/enseignant-etudiant.component';
import { EnseignantModelEComponent } from './enseignant-model-e/enseignant-model-e.component';
import { EnseignantChatComponent } from './enseignant-chat/enseignant-chat.component';



@NgModule({
  declarations: [EnseignantProfilComponent, EnseignantGroupComponent, EnseignantCalendarComponent, EnseignantModelGComponent, EnseignantModelDComponent, EnseignantClasseComponent, EnseignantModelCComponent, EnseignantDocumentComponent, EnseignantEtudiantComponent, EnseignantModelEComponent, EnseignantChatComponent],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FullCalendarModule,
    BsDatepickerModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EnseignantModule { }
