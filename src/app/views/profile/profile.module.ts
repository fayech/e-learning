import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { LoginProfileComponent } from './login-profile/login-profile.component';
import { SingupProfileComponent } from './singup-profile/singup-profile.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { EmailEtudiantComponent } from './email-etudiant/email-etudiant.component';
import { PasswordEtudiantComponent } from './password-etudiant/password-etudiant.component';
import { EmailEnseignantComponent } from './email-enseignant/email-enseignant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


@NgModule({
  declarations: [LoginProfileComponent, SingupProfileComponent, LoginEtudiantComponent, EmailEtudiantComponent, PasswordEtudiantComponent, EmailEnseignantComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProfileModule { }
