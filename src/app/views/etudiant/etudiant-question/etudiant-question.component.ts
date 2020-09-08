import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etudiant-question',
  templateUrl: './etudiant-question.component.html',
  styleUrls: ['./etudiant-question.component.scss']
})
export class EtudiantQuestionComponent implements OnInit {

  constructor(private http: HttpClient) { }
  event = 'vote';
  vote = '';
  voted = false;
  playerData = [
    {
      name: 'yes',
     
      image: 'http://localhost:4200//assets/img/brand/yes.png'
    },
    {
      name: 'No',
      
      
      image: 'http://localhost:4200//assets/img/brand/No.png',
    },
    
    {
      name: 'maybe',
     
      image: 'http://localhost:4200//assets/img/brand/maybe.png',
    },
    
  ];
  voteCount = {
    salah: 0,
    kane: 0,
    eriksen: 0,
    kevin: 0,
  };
  Qusetions = [
    {
      question:'Do you want us to continue with online courses?'
    },
    {
      question:'Are you satisfied with the content of the documents shared on the platform?'
    },
     {
      question:'do you confirm that there are things to improve when you study online?'
    },
     {
      question:'do you want fewer hours of online study and more face-to-face courses?'
    },
    {
      question:'Do you find that within 5 years there will only be online courses?'
    }
  ];
  castVote(player) {
    this.http
      .post(`http://localhost:4000/vote`, { player })
      .subscribe((res: any) => {
        this.vote = res.player;
        this.voted = true;
      });
  }

  getVoteClasses(player) {
    return {
      elect: this.voted && this.vote === player,
      lost: this.voted && this.vote !== player,
    };
  }
  ngOnInit(): void {
  }

}
