
import { Component, OnInit,ViewChild } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service';
import { NgbModalConfig, NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { HttpClient } from '@angular/common/http';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-posts-chart',
  templateUrl: './posts-chart.component.html',
  styleUrls: ['./posts-chart.component.scss']
})
export class PostsChartComponent implements OnInit {
  items: any = [];
  constructor(
    private PostsService: PostsService,
    private modelService: NgbModal,
    private Toastr: ToastrService,
    private http: HttpClient) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  
  pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  // pieChartLabels: Label[] = ['Nitrogen', 'Oxygen', 'Argon', 'Carbon dioxide'];

  //pieChartData: number[] = [78.09, 20.95, 0.93, 0.03];
  public pieChartLabels = [];
  public pieChartData = [];
  
  public enseignantLabels = [];
  public enseignanttData = [];
  public pieChartType = 'pie';
  NbEtudiant: any = {};
  NbEnseignant : any = {};
  NbGroupes : any = {};


  ngOnInit() {
    this.AllNbEtudiant();
    this.Nbenseignant();
    this.NbEnseignantTotal();
    this.NbEtudiantTotal();
    this.NbGroupesTotal();
  }
  AllNbEtudiant() {
    this.PostsService.chartpieChart().subscribe(res => {
      console.log(res);
      
      for (let pieChart of res) {
        this.pieChartLabels.push(pieChart._id);

        this.pieChartData.push(pieChart.count);

        
  
      }
    });
  }
  Nbenseignant() {
    this.PostsService.enseignantpieChart().subscribe(res => {
      console.log(res);
      
      for (let pieChart of res) {
        this.enseignantLabels.push(pieChart._id);

        this.enseignanttData.push(pieChart.count);

        
  
      }
    });
  }

  NbEtudiantTotal() {
    this.PostsService.NbEtudiantTotal().subscribe(res => {
     
      this.NbEtudiant = res;
console.log(this.NbEtudiant);

    });
  }
  NbEnseignantTotal() {
    this.PostsService.NbEnseignantTotal().subscribe(res => {
      this.NbEnseignant = res;
      console.log(this.NbEnseignant);
    });
  }
  NbGroupesTotal() {
    this.PostsService.NbGroupesTotal().subscribe(res => {
      
      this.NbGroupes = res;
      console.log(this.NbGroupes);
    });
  }
}
