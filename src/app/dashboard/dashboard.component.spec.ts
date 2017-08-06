import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IssueService } from 'app/issues/service/issue.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  function addIssue(value: string): void {
    component.addIssueFromInput(<HTMLInputElement>{ value }, <HTMLInputElement>{ value: '' });
  }

  function addChildIssue(value: string, parent: number): void {
    component.addIssueFromInput(
      <HTMLInputElement>{ value },
      <HTMLInputElement>{ value: String(parent) });
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
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
    component.addIssueFromInput(input, <HTMLInputElement>{ value: '' });
    expect(input.value).toBe('');
  });

  it('should be able to add/get issues', function () {
    addIssue('Issue 1');
    expect(component.getIssues()[0].name).toBe('Issue 1');
  });


  it('should be able to add child issue', function () {
    addIssue('Parent Issue');
    addChildIssue('Child Issue', 0);
    expect(component.getChildrenOf(0)[0].name).toEqual('Child Issue');
  });

});
