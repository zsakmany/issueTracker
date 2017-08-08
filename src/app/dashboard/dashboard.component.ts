import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { IIssue } from 'app/models/iissue';
import { IssueService } from 'app/issues/service/issue.service';
import { IssueComponent } from 'app/issues/issue.component';

@Component({
  selector: 'blackguard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  @ViewChildren(IssueComponent) private issueComponents: QueryList<IssueComponent>;

  public parentIssue: IIssue = null;
  private filterRoots = true;

  constructor(private issueService: IssueService) { }

  ngOnInit() {

  }

  public addIssueFromInput(input: HTMLInputElement): void {
    const parentId = this.parentIssue ? this.parentIssue.id : undefined;
    if (input.value !== '') {
      this.issueService.handleNewIssue(input.value, parentId);
      this.unmarkParentIssue();
      input.value = '';
    }
  }

  public getIssues(): IIssue[] {
    return this.filterRoots ? this.issueService.getRootIssues() : this.issueService.getIssues();
  }

  public getChildrenOf(id: number): IIssue[] {
    return this.issueService.getChildrenOf(id);
  }

  public onSelectIssue(issue: IIssue): void {
    this.parentIssue = issue;
  }

  public onDeselectIssue(issue: IIssue): void {
    this.parentIssue = null;
  }

  public toggleFilter(): void {
    this.filterRoots = !this.filterRoots;
  }

  private unmarkParentIssue(): void {
    const issueComponent = this.issueComponents.find(ic => ic.issue === this.parentIssue);
    if (issueComponent) {
      issueComponent.unmarkAsParent();
    }
    this.parentIssue = null;
  }

}
