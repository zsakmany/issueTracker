import { Component, OnInit } from '@angular/core';
import { IIssue } from 'app/models/iissue';
import { IssueService } from 'app/issues/service/issue.service';

@Component({
  selector: 'blackguard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {

  }

  public addIssueFromInput(input: HTMLInputElement, parent: HTMLInputElement): void {
    const parentId = parent.value !== '' ? Number(parent.value) : undefined;
    if (input.value !== '') {
      this.issueService.addIssue(input.value, parentId);
      input.value = '';
    }
  }

  public getIssues(): IIssue[] {
    return this.issueService.getRootIssues();
  }

  public toggleIssueDone(id: number): void {
    this.issueService.toggleIssueDone(id);
  }

  public removeIssue(id: number): void {
    this.issueService.removeIssue(id);
  }

  public getChildrenOf(id: number): IIssue[] {
    return this.issueService.getChildrenOf(id);
  }

}
