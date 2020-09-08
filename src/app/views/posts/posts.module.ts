import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { PostsEtudiantComponent } from './posts-etudiant/posts-etudiant.component';
import { PostsEnseignantComponent } from './posts-enseignant/posts-enseignant.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalEtudiantComponent } from './modal-etudiant/modal-etudiant.component';
import { ModalEnseignantComponent } from './modal-enseignant/modal-enseignant.component';
import { ChartsModule } from 'ng2-charts';
import { PostsChartComponent } from './posts-chart/posts-chart.component';
import { PostsGroupComponent } from './posts-group/posts-group.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [PostsListComponent, PostsEtudiantComponent, PostsEnseignantComponent, ModalEtudiantComponent, ModalEnseignantComponent, PostsChartComponent, PostsGroupComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    BsDatepickerModule,
    DragDropModule,
  ]
})
export class PostsModule { }
