import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient.model';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  constructor(private patientService: PatientService) { }

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

}
