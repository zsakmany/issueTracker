import { Component, OnInit, Input, Inject } from '@angular/core';
import { Issue } from 'app/models/issue';
import { MD_DIALOG_DATA } from '@angular/material';
import { IssueService } from 'app/issues/service/issue.service';

@Component({
  selector: 'blackguard-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.less']
})
export class EditIssueComponent implements OnInit {

  constructor( @Inject(MD_DIALOG_DATA) public issue: Issue, private issueService: IssueService) { }

  ngOnInit() {
  }

  public getName(id: number): string {
    return this.issueService.getIssueById(id).name;
  }
}
