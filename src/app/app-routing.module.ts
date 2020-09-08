import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { UserLayoutComponent } from "./shared/components/layouts/user-layout/user-layout.component";
import { BlankLayoutComponent } from "./shared/components/layouts/blank-layout/blank-layout.component";
import { EtudiantLayoutComponent } from './shared/components/layouts/etudiant-layout/etudiant-layout.component';
import { HomePage404Component } from './shared/components/layouts/home-page404/home-page404.component';
import { EnseignantLayoutComponent } from './shared/components/layouts/enseignant-layout/enseignant-layout.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'',
    component: BlankLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/pages/pages.module').then(m =>m.PagesModule)
      }
    ]
  },
  {
    path:'Etudiant',
    component: EtudiantLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/etudiant/etudiant.module').then(m =>m.EtudiantModule)
      }
    ],
    canActivate:[AuthGuard]
  
  },
  {
    path:'Enseignant',
    component: EnseignantLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/enseignant/enseignant.module').then(m =>m.EnseignantModule)
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path:'auth',
    component: BlankLayoutComponent,
    children: [
    {
      path: '',
      loadChildren: () => import ('./views/profile/profile.module').then(m =>m.ProfileModule)
    },

  ]
  },
  {
    path: 'admin',
    component : AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import ('./views/posts/posts.module').then(m =>m.PostsModule)
      }
    ],
    canActivate:[AuthGuard]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: () => import ('./views/notes/notes.module').then(m =>m.NotesModule)
      }
    ]
  },
  {
    path:'**',
    component:HomePage404Component
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
