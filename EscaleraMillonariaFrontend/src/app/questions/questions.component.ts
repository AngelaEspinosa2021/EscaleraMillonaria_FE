import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../core/services/questions/questions.service';
import { CategoriesService } from '../core/services/categories/categories.service';
import { AwardsService } from '../core/services/awards/awards.service';
import { Pipe } from '@angular/core';

import { Category } from '../shared/models/category.model';
import { Question } from './../shared/models/question.model';
import { Award } from '../shared/models/award.model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  categories: Category[] = [];
  currentCategory?: Category = undefined;
  indexCategory = 1;
  questions: Question[] = [];
  currentQuestion?: Question = undefined;
  indexQuestion = 0;
  award!: Award;
  contadorAlert = 0;
    
  constructor(
    private questionsService: QuestionsService,
    private router: Router,
    private categoriesService: CategoriesService,
    private awardsService: AwardsService
    ) { }

  ngOnInit(): void {
    this.getQuestionsByCategory(1);
    this.getAllCategories();
    //this.getAward(1,1);
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

  validateAnswer(num: string, answer: string,){
    console.log(num,answer)
    if(num == answer)
    {
      alert("MUY BIEN, vamos por la siguiente.");
      this.contadorAlert = 0;
      this.indexQuestion++;
      console.log(this.indexQuestion);
      this.nextCategory(this.indexQuestion);      
      this.currentQuestion = this.questions[this.indexQuestion];      
      //this.getAward(idCategory,questionPosition);
      
    }
    else
    { 
      this.contadorAlert++; 
      if(this.contadorAlert == 1)
      {        
        alert("¡PERDISTE!, piensa muy bien antes de contestar, solo te queda una oportunidad.");                
      }
      if(this.contadorAlert == 2)
      {
        alert("LO SIENTO, FIN DEL JUEGO.");
        this.router.navigate(['./']);
      }
          
    }  
    
  }

  getAllCategories(){
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories.result;
      this.currentCategory = this.categories[this.indexCategory-1];      
      console.log(categories);
    })
  }

  getAward(idCategory: number, questionPosition: number){
    this.awardsService.getAward(idCategory,questionPosition).subscribe(award => {
      this.award = award[0];
      console.log(award);
    })
  }

  nextCategory(indexQuestion: number){
    if(this.indexQuestion == 6)
      { 
        alert("BIEN HECHO, PASASTE A LA SIGUIENTE CATEGORIA.");   
        this.indexCategory++;
        this.currentCategory = this.categories[this.indexCategory-1];
        this.getQuestionsByCategory(this.indexCategory);
        this.indexQuestion=0;
      }
  }

}
