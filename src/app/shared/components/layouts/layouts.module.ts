import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';


import { RouterModule } from "@angular/router";
import { EtudiantLayoutComponent } from './etudiant-layout/etudiant-layout.component';
import { HomePage404Component } from './home-page404/home-page404.component';
import { EnseignantLayoutComponent } from './enseignant-layout/enseignant-layout.component';



@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, AuthLayoutComponent, BlankLayoutComponent, HeaderHomeComponent, FooterHomeComponent, EtudiantLayoutComponent, HomePage404Component, EnseignantLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class LayoutsModule { }
