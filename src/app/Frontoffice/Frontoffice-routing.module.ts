import { Routes } from '@angular/router';


import { AdmissionComponent } from './Admission/Admission.component';
import { VisitorbookComponent } from './visitorbook/visitorbook.component';
import { calllogComponent} from './calllog/calllog.component';
import { PostaldispatchComponent } from './postaldispatch/postaldispatch.component';
import { PostalreceiveComponent } from './postalreceive/postalreceive.component';
import { ComplainComponent } from './complain/complain.component';
import { SetupComponent } from './setup/setup.component';

export const routes: Routes = [
   { path: 'Admission', component: AdmissionComponent},
  { path: 'visitorbook', component: VisitorbookComponent},
  { path: 'calllog', component: calllogComponent},
  {path : 'complain', component: ComplainComponent},
  {path : 'postaldispatch', component: PostaldispatchComponent},
  {path : 'postalreceive', component: PostalreceiveComponent},
  {path : 'setup', component: SetupComponent},

];


