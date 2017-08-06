import { Injectable } from '@angular/core';
import { Issue } from 'app/models/issue';

@Injectable()
export class IssueService {
  private issueIndex = 0;
  private issues: Issue[] = [];

  constructor() { }

  public getIssues(): Issue[] {
    return this.issues;
  }

  public getRootIssues(): Issue[] {
    return this.issues.filter(i => i.parent === null);
  }

  public addIssue(name: string, parent?: number): void {
    if (name !== '') {
      const issue = this.createNewIssueFromName(name);
      this.issues.push(issue);
      if (typeof parent !== 'undefined') {
        issue.parent = parent;
        this.getIssueById(parent).children.push(issue.id);
      }
    }
  }

  public removeIssue(id: number): void {
    if (this.issues.find(i => i.id === id) === undefined) {
      throw new Error(`There is no Issue with ID: ${id}`);
    }
    this.issues = this.issues.filter(i => i.id !== id);
  }

  public toggleIssueDone(id: number): void {
    const issue = this.issues.find(i => i.id === id);
    issue.done = !issue.done;
  }

  public getChildrenOf(id: number): Issue[] {
    const parentIssue = this.getIssueById(id).children;
    return this.issues.filter(i => parentIssue.includes(i.id));
  }

  private createNewIssueFromName(name: string): Issue {
    const issue = new Issue();
    issue.id = this.issueIndex++;
    issue.name = name;
    return issue;
  }

  private getIssueById(id: number): Issue {
    if (this.issues.find(i => i.id === id) === undefined) {
      throw new Error(`There is no Issue with ID: ${id}`);
    }
    return this.issues.find(i => i.id === id);
  }
}
