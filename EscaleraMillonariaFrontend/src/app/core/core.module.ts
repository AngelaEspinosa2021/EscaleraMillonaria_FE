import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { QuestionsService } from './services/questions/questions.service';
import { CategoriesService } from './services/categories/categories.service';
import { AwardsService } from './services/awards/awards.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    QuestionsService,
    CategoriesService,
    AwardsService
  ]
})
export class CoreModule { }
