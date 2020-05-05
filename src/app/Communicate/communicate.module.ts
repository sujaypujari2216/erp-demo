import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './send-email/group/group.component';
import { IndivisualComponent } from './send-email/indivisual/indivisual.component';
import { ClassComponent } from './send-email/class/class.component';
import { TodayBdayComponent } from './send-email/today-bday/today-bday.component';



@NgModule({
  declarations: [GroupComponent, IndivisualComponent, ClassComponent, TodayBdayComponent],
  imports: [
    CommonModule
  ]
})
export class CommunicateModule { }
