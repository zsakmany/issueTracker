import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { EditIssueComponent } from './edit-issue.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

xdescribe('EditIssueComponent', () => {
  let component: EditIssueComponent;
  let fixture: ComponentFixture<EditIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditIssueComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
