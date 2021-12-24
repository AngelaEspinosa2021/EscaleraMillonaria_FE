import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { QuestionsService } from './services/questions/questions.service';
import { CategoriesService } from './services/categories/categories.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    QuestionsService,
    CategoriesService
  ]
})
export class CoreModule { }
