import { AppointmentDetailService } from '../../shared/appointment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styles: []
})
export class AppointmentDetailComponent implements OnInit {

  constructor(private service: AppointmentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      APID: 0,
      Name: '',
      Complaint: '',
      Date: '',
      TimeofDay: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.APID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postAppointmentDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Appointment Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putAppointmentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Appointment Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
