import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CollectfeesComponent } from './collectfees/collectfees.component';
import { CaryforwordComponent } from './caryforword/caryforword.component';
import { FeesdiscountComponent } from './feesdiscount/feesdiscount.component';
import { FeespaymentComponent} from './feespayment/feespayment.component';
import { FeesmasterComponent } from './feesmaster/feesmaster.component';
import { FeesgroupComponent } from './feesgroup/feesgroup.component';
import { DuefeesComponent } from './duefees/duefees.component';
import { FeestypeComponent } from './feestype/feestype.component';
import { ReminderComponent } from './reminder/reminder.component';



const routes: Routes = [

  { path: 'collectfees', component: CollectfeesComponent},
  {path :'feespayment', component: FeespaymentComponent},
  { path: 'caryforword', component: CaryforwordComponent},
  { path: 'feesdiscount', component: FeesdiscountComponent},
 
  {path :'feesmaster', component: FeesmasterComponent},
  {path :'feesgroup', component: FeesgroupComponent},
  {path :'duefees', component: DuefeesComponent},
  {path :'feestype', component: FeestypeComponent},
  {path :'reminder', component: ReminderComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsRoutingModule {}
