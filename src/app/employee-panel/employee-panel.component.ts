import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styles: []
})
export class EmployeePanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);                                                                                                                           
  }
}
