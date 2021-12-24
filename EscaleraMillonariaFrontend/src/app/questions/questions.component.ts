import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../core/services/questions/questions.service';
import { CategoriesService } from '../core/services/categories/categories.service';

import { Category } from '../shared/models/category.model';
import { Question } from './../shared/models/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  categories: Category[] = [];
  currentCategory?: Category = undefined;
  indexCategory = 0;
  questions: Question[] = [];
  currentQuestion?: Question = undefined;
  indexQuestion = 0;
    
  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
    this.getQuestionsByCategory(1);
    this.getAllCategories(); 
  }

  getQuestionsByCategory(idCategory: number) {
    this.questionsService.getQuestionsByCategory(idCategory).subscribe(questions => {
      {
        this.questions = questions.result;
        this.currentQuestion = this.questions[this.indexQuestion];
        console.log(questions); 
      }
    });     
  }

  validateAnswer(num: string, answer: string){
    console.log(num,answer);
    
    if(num == answer)
    {
      this.indexQuestion++;
      this.currentQuestion = this.questions[this.indexQuestion];
    }
    console.log(false);
  }

  getAllCategories(){
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories.result;
      this.currentCategory = this.categories[this.indexCategory];      
      console.log(categories);
    })
  }

}
