import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './Components/patient/patient.component';
import { PatientlistComponent } from './Components/patientlist/patientlist.component';

const routes: Routes = [
  { path: '', component: PatientlistComponent },
  { path: 'saveP', component: PatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
