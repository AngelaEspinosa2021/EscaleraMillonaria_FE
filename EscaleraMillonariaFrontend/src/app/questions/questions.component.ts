import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../core/services/questions/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private service: QuestionsService) { }

  ngOnInit(): void {
    this.getQuestionsByCategory(1);   
  }

  getQuestionsByCategory(idCategory: number) {
    this.service.getQuestionsByCategory(idCategory).subscribe((data:any) => {
      console.log(data);
    });
  }

}
