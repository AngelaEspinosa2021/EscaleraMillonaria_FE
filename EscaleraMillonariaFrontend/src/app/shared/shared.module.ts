import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule    
  ],
  exports: [
  ]
})
export class SharedModule { }
