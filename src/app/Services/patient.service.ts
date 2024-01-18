import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../Models/patient.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8087/api';

  addPatient(newPatient:Patient): Observable<any> {
    const url = this.baseUrl + '/save';
    return this.http.post(url, newPatient);
  }

  getPatient(): Observable<Patient[]> {
    const url = this.baseUrl + '/alldata';
    return this.http.get<Patient[]>(url);
  }

  updatePatient(patientId:number,patient: Patient): Observable<Patient> {
    const url = this.baseUrl + '/update/' + patientId;
    return this.http.put<Patient>(url, patient);
  }

  deletepatient(patientId: number): Observable<void> {
    const url = this.baseUrl + '/delete/' + patientId;
    return this.http.delete<void>(url);
  }
}
