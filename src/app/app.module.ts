    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {ScheduleModule, AgendaService, DayService, DragAndDropService, ResizeService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ManagerPanelComponent } from './manager-panel/manager-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { AppointmentDetailComponent } from './appointment-details/appointment-detail/appointment-details.component';
import { AppointmentDetailListComponent } from './appointment-details/appointment-detail-list/appointment-detail-list.component';
import { AppointmentDetailService } from './shared/appointment-detail.service';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ManagerPanelComponent,
    ForbiddenComponent,
    EmployeePanelComponent,
    AppointmentDetailComponent,
    AppointmentDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    ScheduleModule
  ],
  providers: [UserService,AppointmentDetailService,AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }