import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Issue } from 'app/models/issue';
import { IssueService } from 'app/issues/service/issue.service';

@Component({
  selector: 'blackguard-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.less']
})
export class IssueComponent implements OnInit {

  @Input() public issue: Issue = <Issue>{};
  @Output() public select = new EventEmitter<Issue>();
  @Output() public deselect = new EventEmitter<Issue>();

  private useAsParent = false;

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

  public toggleIssueDone(): void {
    this.issueService.toggleIssueDone(this.issue.id);
  }

  public removeIssue(): void {
    this.issueService.removeIssue(this.issue.id);
    this.deselect.emit(this.issue);
  }

  public clickParentButton(): void {
    this.useAsParent = !this.useAsParent;
    if (this.useAsParent) {
      this.select.emit(this.issue);
    } else {
      this.deselect.emit(this.issue);
    }
  }

  public markAsParent(): void {
    this.useAsParent = true;
  }
  public unmarkAsParent(): void {
    this.useAsParent = false;
  }

}
