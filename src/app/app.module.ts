import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IssueComponent } from './issues/issue.component';
import { IssueService } from 'app/issues/service/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IssueComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MaterialModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
