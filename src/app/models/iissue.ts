export interface IIssue {
  id: number;
  name: string;
  done: boolean;
  children: number[];
  parent: number;
}
