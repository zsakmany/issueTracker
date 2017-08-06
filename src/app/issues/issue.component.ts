import { Input, Component, OnInit } from '@angular/core';
import { Issue } from 'app/models/issue';
import { IssueService } from 'app/issues/service/issue.service';

@Component({
  selector: 'blackguard-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.less']
})
export class IssueComponent implements OnInit {

  @Input() private issue: Issue = <Issue>{};

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

  public toggleIssueDone(): void {
    this.issueService.toggleIssueDone(this.issue.id);
  }

  public removeIssue(): void {
    this.issueService.removeIssue(this.issue.id);
  }
}
