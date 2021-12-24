import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {

  constructor(private http: HttpClient) { }

  getAward(idCategory: number, questionPosition: number){
    return this.http.get<any>(`${environment.url_api}/Awards/${idCategory}/questionPosition`);
  }
}
