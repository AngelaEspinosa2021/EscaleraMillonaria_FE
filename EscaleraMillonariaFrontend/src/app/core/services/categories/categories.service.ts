import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Category } from 'src/app/shared/models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get<Category[]>(`${environment.url_api}/Categories`);
  }
}
