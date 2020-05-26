import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AdmissionComponent } from './Admission/Admission.component';
import { VisitorbookComponent } from './visitorbook/visitorbook.component';
import { calllogComponent } from './calllog/calllog.component';
import { PostaldispatchComponent } from './postaldispatch/postaldispatch.component';
import { PostalreceiveComponent } from './postalreceive/postalreceive.component';
import { ComplainComponent } from './complain/complain.component';
import { SetupComponent } from './setup/setup.component';
import { ComplainttypeComponent } from './setup/complainttype/complainttype.component';
import { VisitorsPurposeComponent } from './setup/visitors-purpose/visitors-purpose.component';
import { SourceComponent } from './setup/source/source.component';
import { ReferenceComponent } from './setup/reference/reference.component';
@NgModule({
  declarations: [AdmissionComponent,calllogComponent,PostaldispatchComponent,
    PostalreceiveComponent,ComplainComponent,SetupComponent,ComplainttypeComponent,
    VisitorsPurposeComponent,SourceComponent,ReferenceComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class FrontofficeModule {
}
