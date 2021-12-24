import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../core/services/questions/questions.service';


import { Question } from './../shared/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];
  currentQuestion?: Question = undefined;
  index = 0;
    
  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getQuestionsByCategory(1);   
  }

  getQuestionsByCategory(idCategory: number) {
    this.questionsService.getQuestionsByCategory(idCategory).subscribe(questions => {
      {
        this.questions = questions.result;
        this.currentQuestion = this.questions[this.index];
        console.log(questions); 
      }
    });     
  }

  validateAnswer(num: string, answer: string){
    console.log(num,answer);
    this.index++;
    this.currentQuestion = this.questions[this.index];
    if(num == answer)
    {
      console.log(true);
    }
    console.log(false);
  }

}
