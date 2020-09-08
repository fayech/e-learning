import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsEtudiantComponent } from './posts-etudiant/posts-etudiant.component';
import { PostsEnseignantComponent } from './posts-enseignant/posts-enseignant.component';
import { PostsChartComponent } from './posts-chart/posts-chart.component';
import { PostsGroupComponent } from './posts-group/posts-group.component';


const routes: Routes = [
  {
    path: '',
    component: PostsListComponent
  },
  {
    path: 'Etudiant',
    component: PostsEtudiantComponent
  },
  {
    path: 'Enseignant',
    component: PostsEnseignantComponent
  },
  {
    path: 'Chart',
    component: PostsChartComponent
  },
  {
    path: 'Group',
    component: PostsGroupComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
