import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {
    path:'questions',
    component: QuestionsComponent
  },
  {
    path:'player',
    component: PlayerComponent
  },
  {
    path:'',
    component: PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
