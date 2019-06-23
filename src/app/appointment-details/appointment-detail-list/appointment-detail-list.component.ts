import { AppointmentDetail } from '../../shared/appoitnemt-detail.model';
import { AppointmentDetailService } from '../../shared/appointment-detail.service';
import { Component, OnInit } from '@angular/core';
import { HubConnectionBuilder} from '@aspnet/signalr';

@Component({
  selector: 'app-appointment-detail-list',
  templateUrl: './appointment-detail-list.component.html',
  styles: []
})
export class AppointmentDetailListComponent implements OnInit {

  public appointments: Array<AppointmentDetail>;

  constructor(private service: AppointmentDetailService) { }

  ngOnInit() {
    let connection = new HubConnectionBuilder().withUrl('http://localhost:5000/signalServer').build();
    connection.on('refreshAppointments', (data) =>{
      this.appointmentData();
    });
    this.appointmentData();
    
    connection.start().then(()=>console.log('connected'));
  }

  public appointmentData(): void{
    this.service.getAllAppointments().subscribe(data=>{
      this.appointments = data;
      });
  }
 
}
