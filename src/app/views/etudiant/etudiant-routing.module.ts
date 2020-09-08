import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantProfilComponent } from './etudiant-profil/etudiant-profil.component';
import { EtudiantCalendarComponent } from './etudiant-calendar/etudiant-calendar.component'; // for FullCalendar!
import { EtudiantQuestionComponent } from './etudiant-question/etudiant-question.component'; // for FullCalendar!
import { EtudiantDocumentComponent } from './etudiant-document/etudiant-document.component';
import { EtudiantChatComponent } from './etudiant-chat/etudiant-chat.component'; // for FullCalendar!


const routes: Routes = [
  {
    path: "",
    component: EtudiantProfilComponent
  },
  {
    path: "Calendar",
    component: EtudiantCalendarComponent
  },
  {
    path: "Profil",
    component: EtudiantProfilComponent
  },
  {
    path:"Question",
    component:EtudiantQuestionComponent
  },
  {
    path:"Document/:Niveau",
    component:EtudiantDocumentComponent
  },
  {
    path:"Chat",
    component:EtudiantChatComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
