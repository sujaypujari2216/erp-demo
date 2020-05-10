import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentCertificateComponent } from './student-certificate/student-certificate.component';
import { GenerateCertificateComponent } from './generate-certificate/generate-certificate.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { GenerateIdComponent } from './generate-id/generate-id.component';

const routes: Routes = [
    { path: 'student-certificate',component: StudentCertificateComponent},
    { path: 'generate-certificate', component: GenerateCertificateComponent},
    { path: 'student-id', component: StudentIdComponent},
    { path: 'generate-id', component:GenerateIdComponent}  
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CertificateRoutingModule { }
