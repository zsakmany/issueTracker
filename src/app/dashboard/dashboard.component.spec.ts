import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IssueService } from 'app/issues/service/issue.service';
import { IssueComponent } from 'app/issues/issue.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  function addIssue(value: string): void {
    component.addIssueFromInput(<HTMLInputElement>{ value });
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent,IssueComponent],
      providers: [IssueService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should clear the input field after adding issue', () => {
    const input = <HTMLInputElement>{ value: 'Issue 1' };
    component.addIssueFromInput(input);
    expect(input.value).toBe('');
  });

  it('should be able to add/get issues', function () {
    addIssue('Issue 1');
    expect(component.getIssues()[0].name).toBe('Issue 1');
  });


  it('should be able to add child issue', function () {
    addIssue('Parent Issue');
    const issue = component.getIssues()[0];
    component.onSelectIssue(issue);
    addIssue('Child Issue');
    expect(component.getChildrenOf(0)[0].name).toEqual('Child Issue');
  });

  it('should use selected issue as parent', function () {
    expect(component.parentIssue).toBeNull();
    addIssue('Parent Issue');
    const issue = component.getIssues()[0];
    component.onSelectIssue(issue);
    expect(component.parentIssue).toBe(issue);
  });

  it('should clear parent selection on deselect', function () {
    expect(component.parentIssue).toBeNull();
    addIssue('Parent Issue');
    const issue = component.getIssues()[0];
    component.onSelectIssue(issue);
    expect(component.parentIssue).toBe(issue);
    component.onDeselectIssue(issue);
    expect(component.parentIssue).toBeNull();
  });

  it('should clear the selected issue after add', function () {
    expect(component.parentIssue).toBeNull();
    addIssue('Parent Issue');
    const issue = component.getIssues()[0];
    component.onSelectIssue(issue);
    expect(component.parentIssue).toBe(issue);
    addIssue('Child Issue');
    expect(component.parentIssue).toBeNull();
  });
});
