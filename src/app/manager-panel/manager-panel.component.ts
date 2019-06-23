import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-panel',
  templateUrl: './manager-panel.component.html',
  styles: []
})
export class ManagerPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public currentDate: Date = new Date(2018, 10, 30);
  public newViewMode: View = 'Month';
  public eventData: EventSettingsModel = {
    dataSource: [{
        Id: 1,
        Subject: 'Board Meeting',
        StartTime: new Date(2018, 10, 30, 9, 0),
        EndTime: new Date(2018, 10, 30, 11, 0)
    },
    {
        Id: 2,
        Subject: 'Training session on JSP',
        StartTime: new Date(2018, 10, 30, 15, 0),
        EndTime: new Date(2018, 10, 30, 17, 0)
    },
    {
        Id: 3,
        Subject: 'Sprint Planning with Team members',
        StartTime: new Date(2018, 10, 30, 9, 30),
        EndTime: new Date(2018, 10, 30, 11, 0)
    }]
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);                                                                                                                           
  }
}

