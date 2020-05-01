import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {AddHomeworkComponent} from './add-homework/add-homework.component';
import {SearchHomeworkComponent} from './search-homework/search-homework.component';



const routes: Routes = [
        {path: 'add-homework', component: AddHomeworkComponent },
        {path: 'search-homework', component: SearchHomeworkComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeworkRoutingModule { }
