import { IIssue } from './iissue';

export class Issue implements IIssue {
  public name;
  public id;
  public done;
  public children: number[];
  public parent: number;

  constructor() {
    this.done = false;
    this.children = [];
    this.parent = null;
  }
}
