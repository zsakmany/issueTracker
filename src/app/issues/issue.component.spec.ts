import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { IssueComponent } from './issue.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IssueService } from 'app/issues/service/issue.service';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [IssueService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to toggle issues', inject([IssueService], function (service: IssueService) {
    const spy = spyOn(service, 'toggleIssueDone');
    component.toggleIssueDone();
    expect(spy.calls.count()).toBe(1);
  }));

  it('should be able to remove issue', inject([IssueService], function (service: IssueService) {
    const spy = spyOn(service, 'removeIssue');
    component.removeIssue();
    expect(spy.calls.count()).toBe(1);
  }));
});
