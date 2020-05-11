import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentInformationRoutingModule } from './student-information-routing.module';
import { StudentInformationComponent } from './student-information.component';


@NgModule({
  declarations: [
    StudentInformationComponent
  ],
  imports: [
    CommonModule,
    StudentInformationRoutingModule
  ]
})
export class StudentInformationModule { }
