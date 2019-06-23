import { AppointmentDetail } from './appoitnemt-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailService {
  formData: AppointmentDetail;
  readonly rootURL = 'http://localhost:5000/api';
  list : AppointmentDetail[];

  constructor(private http: HttpClient) { }

  postAppointmentDetail() {
    return this.http.post(this.rootURL + '/Appointment', this.formData);
  }
  putAppointmentDetail() {
    return this.http.put(this.rootURL + '/Appointment/'+ this.formData.APID, this.formData);
  }
  deleteAppointmentDetail(id) {
    return this.http.delete(this.rootURL + '/Appointment/'+ id);
  }

  getAllAppointments(): Observable<any>{
    return this.http.get(this.rootURL + '/Appointment');
  }

 /* getAppointments(): Observable<any>{
    return this.http.get(this.rootURL + '/Appointment');
  }*/
  
  refreshList(){
    this.http.get(this.rootURL + '/Appointment')
    .toPromise()
    .then(res => this.list = res as AppointmentDetail[]);
  }
}
