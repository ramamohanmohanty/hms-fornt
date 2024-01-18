import { Component, ElementRef, ViewChild } from '@angular/core';
import { Patient } from 'src/app/Models/patient.model';
import { PatientService } from 'src/app/Services/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  selectedPatientId: any;



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


  patientsdata: Patient[] = [];
  patientList: Patient[] = [];
  onPageChange(event: any): void {

  }

  ngOnInit(): void {
    this.loadPatient();
  }

  loadPatient(): void {
    this.patientService.getPatient().subscribe(
      (patients: Patient[]) => {
        this.patientList = patients;
      },
      (error: any) => {
        this.patientsdata = [];
        console.error('Error fetching patienData:', error);
      }
    );
  }
  isExistingPatient: boolean = false;

  patientDetails(patientDetails:any){ 
   
    this.selectedPatientId=patientDetails.patientId;
    this.newPatient={...patientDetails};
  }

  updatePatientDetail(): void {
    this.patientService.updatePatient(this.selectedPatientId, this.newPatient).subscribe(
      (response: Patient) => {
        console.log('Property details updated successfully:', response);
     this.loadPatient();
     this.alertupdate();
      },
      (error) => {
        console.error('Error updating entity:', error);
      }
    );
   
  }


  deletePatient(patientId:any): void {
    this.patientService.deletepatient(patientId).subscribe(
      () => {
        console.log('Patient details deleted successfully');
        this.loadPatient();
       
      },
      (error) => {
        console.error('Error deleting Patient:', error);
      }
    );
  }

  alertupdate() {
    Swal.fire({
      title: 'Success',
      text: 'Patient details updated successfully',
      icon: 'success'
    }).then(() => {
      location.reload(); // Refresh the page
    });
  
  }

}
