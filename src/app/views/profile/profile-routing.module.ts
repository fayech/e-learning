import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { SingupProfileComponent } from './singup-profile/singup-profile.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { EmailEtudiantComponent } from './email-etudiant/email-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


const routes: Routes = [
  {
    path: '',
    component: LoginProfileComponent
  },
  {
    path: 'loginEnseignant',
    component: LoginProfileComponent
  },
  {
    path: 'loginAdmin',
    component: LoginAdminComponent
  },
  {
    path: 'loginEtudiant',
    component: LoginEtudiantComponent
  },
  {
    path: 'Singup',
    component: SingupProfileComponent
  },
  { 
    path: 'GetEtudiant',
    component: EmailEtudiantComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
