import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { IssueComponent } from './issue.component';
import { NO_ERRORS_SCHEMA, EventEmitter, DebugElement } from '@angular/core';
import { IssueService } from 'app/issues/service/issue.service';
import { Issue } from 'app/models/issue';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { NotificationService } from 'app/common-services/notification.service';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;
  let issueEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [MaterialModule],
      providers: [IssueService, NotificationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    issueEl = fixture.debugElement.query(By.css('md-card.issue button.parent'));
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

  it('should emit select event', () => {
    const spy = spyOn(component.select, 'emit');
    component.clickParentButton();
    expect(spy).toHaveBeenCalledWith(<Issue>{});
  });

  it('should deselect issue when clicked twice', () => {
    const spySelect = spyOn(component.select, 'emit');
    const spyDeselect = spyOn(component.deselect, 'emit');
    component.clickParentButton();
    expect(spySelect).toHaveBeenCalledWith(<Issue>{});
    component.clickParentButton();
    expect(spyDeselect).toHaveBeenCalledWith(<Issue>{});
  });

  it('should deselect issue when removed', inject([IssueService], function (service: IssueService) {
    const spyDeselect = spyOn(component.deselect, 'emit');
    spyOn(service, 'removeIssue');
    component.removeIssue();
    expect(spyDeselect).toHaveBeenCalledWith(<Issue>{});
  }));

  it('should call selectIssue when clicked', function () {
    let emittedIssue: Issue;
    component.select.subscribe((issue: Issue) => emittedIssue = issue);
    issueEl.triggerEventHandler('click', null);
    expect(emittedIssue).toEqual(<Issue>{});
  });

});
