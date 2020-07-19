import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FrontofficeRoutingModule } from './Frontoffice-routing.module';
import { AdmissionComponent } from './Admission/Admission.component';
import { VisitorbookComponent } from './visitorbook/visitorbook.component';
import { CalllogsComponent } from './calllogs/calllogs.component';
import { PostaldispatchComponent } from './postaldispatch/postaldispatch.component';
import { PostalreceiveComponent } from './postalreceive/postalreceive.component';
import { ComplainComponent } from './complain/complain.component';
import { SetupComponent } from './setup/setup.component';
import { ComplainttypeComponent } from './setup/complainttype/complainttype.component';
import { VisitorsPurposeComponent } from './setup/visitors-purpose/visitors-purpose.component';
import { SourceComponent } from './setup/source/source.component';
import { ReferenceComponent } from './setup/reference/reference.component';
//import { FormsModule } from "@angular/forms";
//import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [AdmissionComponent, CalllogsComponent, PostaldispatchComponent,
        PostalreceiveComponent, ComplainComponent, VisitorbookComponent, VisitorsPurposeComponent,
        SourceComponent, ReferenceComponent, SetupComponent, ComplainttypeComponent,
        PostalreceiveComponent,],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FrontofficeRoutingModule,
    ]
})
export class FrontofficeModule {
}