import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CertificateRoutingModule } from './certificate-routing.module';
import { StudentCertificateComponent } from './student-certificate/student-certificate.component';
import { GenerateCertificateComponent } from './generate-certificate/generate-certificate.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { GenerateIdComponent } from './generate-id/generate-id.component';




@NgModule({
  declarations: [StudentCertificateComponent,GenerateCertificateComponent,StudentIdComponent,GenerateIdComponent
    ],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CertificateModule { }
