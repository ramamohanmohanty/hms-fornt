import { Component } from '@angular/core';
import { Patient } from 'src/app/Models/patient.model';
import { PatientService } from 'src/app/Services/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {



  constructor(private patientService:PatientService){

  }


  savePatient(): void {
    let body=this.newPatient
    this.patientService.addPatient(body).subscribe(
      (response: Patient) => {
        console.log('Patient saved successfully:', response);
        alert("Save Succcessfully")
       this.alertSave();
      },
      (error: any) => {
        console.error('Error saving entity:', error);
      }
    );
   
  }

  alertSave() {
    Swal.fire("Success"," Patient details saved successfully","success").then(() => {
      location.reload();
    });;
  }

  newPatient:Patient={};

}
