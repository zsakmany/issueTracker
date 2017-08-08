import { Injectable } from '@angular/core';
import { Issue } from 'app/models/issue';
import * as io from 'socket.io-client';

@Injectable()
export class IssueService {
  private issueIndex = 0;
  private issues: Issue[] = [];
  private socket: SocketIOClient.Socket

  constructor() {
    this.socket = io();
    this.socket.once('SERVER_LOAD_ISSUES', (data: any) => {
      this.issues = <Issue[]>data;
    });
    this.socket.on('SERVER_UPDATE_ISSUES', (data: any) => {
      this.issues = <Issue[]>data;
    });
  }

  public getIssues(): Issue[] {
    return this.issues;
  }

  public getRootIssues(): Issue[] {
    return this.issues.filter(i => i.parent === null);
  }

  public handleNewIssue(name: string, parent?: number): void {
    if (name !== '') {
      const issue = this.createNewIssueFromName(name);
      this.addIssue(issue);
      if (typeof parent !== 'undefined') {
        issue.parent = parent;
        this.getIssueById(parent).children.push(issue.id);
      }
      this.socket.emit('CLIENT_ISSUE_CHANGE', this.issues);
    }
  }

  public removeIssue(id: number): void {
    if (this.issues.find(i => i.id === id) === undefined) {
      throw new Error(`There is no Issue with ID: ${id}`);
    }
    this.issues = this.issues.filter(i => i.id !== id);
    this.socket.emit('CLIENT_ISSUE_CHANGE', this.issues);
  }

  public toggleIssueDone(id: number): void {
    const issue = this.issues.find(i => i.id === id);
    issue.done = !issue.done;
  }

  public getChildrenOf(id: number): Issue[] {
    const parentIssue = this.getIssueById(id).children;
    return this.issues.filter(i => parentIssue.includes(i.id));
  }

  private addIssue(issue: Issue): void {
    this.issues.push(issue);
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
