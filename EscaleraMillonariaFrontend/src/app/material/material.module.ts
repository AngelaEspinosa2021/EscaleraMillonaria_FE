import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
   
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
   
  ]
})
export class MaterialModule { }
