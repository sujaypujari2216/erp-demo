import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { SendSMSComponent } from './send-sms/send-sms.component';
import { EmailSMSLogComponent } from './email-sms-log/email-sms-log.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const routes:Routes=[
  {path:'noticeboard',component:NoticeBoardComponent},
  {path:'sendemail',component:SendEmailComponent},
  {path:'sendsms',component:SendSMSComponent},
  {path:'emailsmslog',component:EmailSMSLogComponent},
  {path:'compose-message',component:ComposeMessageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CommunicateRoutingModule { }
