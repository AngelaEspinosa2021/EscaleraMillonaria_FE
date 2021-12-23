import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../core/services/questions/questions.service';

import { Question } from './../shared/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question!: Question;

  constructor(
    private service: QuestionsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getQuestionsByCategory(1);   
  }

  getQuestionsByCategory(idCategory: number) {
    this.service.getQuestionsByCategory(idCategory).subscribe(question => {
      console.log(question);
    });
  }

  questionForm = new FormGroup({
    questionStatement: new FormControl(''),
    optionOne: new FormControl(''),
    optionTwo: new FormControl(''),
    optionThree: new FormControl(''),
    optionFour: new FormControl(''),
  })

  onSubmit(){
    console.log(this.questionForm.value);
  }

}
