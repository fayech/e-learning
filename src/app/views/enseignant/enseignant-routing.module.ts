import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantProfilComponent } from './enseignant-profil/enseignant-profil.component';
import { EnseignantGroupComponent } from './enseignant-group/enseignant-group.component';
import { EnseignantCalendarComponent } from './enseignant-calendar/enseignant-calendar.component';
import { EnseignantClasseComponent } from './enseignant-classe/enseignant-classe.component';
import { EnseignantDocumentComponent } from './enseignant-document/enseignant-document.component';
import { EnseignantEtudiantComponent } from './enseignant-etudiant/enseignant-etudiant.component';
import { EnseignantChatComponent } from './enseignant-chat/enseignant-chat.component';

const routes: Routes = [
  {
    path: "",
    component: EnseignantProfilComponent
  },
  {
    path: "Etudiant",
    component: EnseignantEtudiantComponent
  },
  {
    path: "Calendar",
    component: EnseignantCalendarComponent
  },
  {
    path: "Group/:nom",
    component: EnseignantDocumentComponent
  },
  {
    path:"Profil",
    component: EnseignantProfilComponent
  },
  {
    path:"Classe",
    component: EnseignantClasseComponent
  },
  {
    path:"Chat",
    component:EnseignantChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
