import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

 constructor(private http: HttpClient) { }

  getQuestionsByCategory(idCategory: number){
    return this.http.get<any>(`${environment.url_api}/Questions?idCategory=${idCategory}`);
  }
}
