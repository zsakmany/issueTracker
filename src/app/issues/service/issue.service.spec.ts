import { TestBed, inject } from '@angular/core/testing';

import { IssueService } from './issue.service';

describe('IssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueService]
    });
  });

  it('should be created', inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));


  it('should getIssues', inject([IssueService], (service: IssueService) => {
    expect(service.getIssues()).toEqual([]);
  }));

  it('should add multiple issues', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('Issue 1');
    service.handleNewIssue('Issue 2');
    const issues = service.getIssues()
    expect(issues[0].name).toBe('Issue 1');
    expect(issues[1].name).toBe('Issue 2');
  }));

  it('should handle adding issue from input', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('Issue 1');
    expect(service.getIssues()[0].name).toBe('Issue 1');
  }));

  it('should not add empty issue', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('');
    expect(service.getIssues()).toEqual([]);
  }));

  it('should be able to remove issue', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('Issue 1');
    service.removeIssue(0);
    expect(service.getIssues()).toEqual([]);
  }));

  it('should throw exception when removing non existing issue', inject([IssueService], (service: IssueService) => {
    expect(() => service.removeIssue(0)).toThrowError(/There is no Issue with ID: 0/);
  }));

  it('should handle toggling issues done', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('Issue 1');
    expect(service.getIssues()[0].done).toBe(false);
    service.toggleIssueDone(0);
    expect(service.getIssues()[0].done).toBe(true);
  }));

  it('should be able to add issue to issue', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('Parent Issue');
    service.handleNewIssue('Child Issue', 0);
    expect(service.getChildrenOf(0)[0].name).toBe('Child Issue');
  }));

  it('should throw error when trying to add issue to non existing issue', inject([IssueService], (service: IssueService) => {
    expect(() => service.handleNewIssue('Child Issue1', 2)).toThrowError(/There is no Issue with ID: 2/);
  }));

  it('should return all the root issues', inject([IssueService], (service: IssueService) => {
    service.handleNewIssue('Parent Issue');
    service.handleNewIssue('Child Issue', 0);
    service.handleNewIssue('Parent Issue');
    service.handleNewIssue('Child Issue', 3);
    const rootIssues = service.getRootIssues();
    expect(rootIssues.length).toBe(2);
    expect(rootIssues[0].name).toBe('Parent Issue');
  }));

});
