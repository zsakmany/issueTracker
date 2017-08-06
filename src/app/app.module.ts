import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issues/issue.component';
import { IssueService } from 'app/issues/service/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IssueComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
