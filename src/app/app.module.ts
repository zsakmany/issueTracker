import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdSnackBar } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditIssueComponent } from './issues/edit-issue/edit-issue.component';
import { IssueComponent } from './issues/issue.component';
import { IssueService } from 'app/issues/service/issue.service';
import { NotificationService } from 'app/common-services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditIssueComponent,
    IssueComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [IssueService, NotificationService, MdSnackBar],
  bootstrap: [AppComponent],
  entryComponents: [EditIssueComponent]
})
export class AppModule { }
