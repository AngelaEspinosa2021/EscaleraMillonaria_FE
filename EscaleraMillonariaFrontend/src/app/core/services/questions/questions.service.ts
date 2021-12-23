import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Question } from './../../../shared/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  baserUrl: string = 'https://localhost:44373/api/Questions';

  constructor(private http: HttpClient) { }

  getQuestionsByCategory(idCategory: number){
    return this.http.get<Question[]>(`${environment.url_api}/Questions?idCategory=${idCategory}`);
  }
}
