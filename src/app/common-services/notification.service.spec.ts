import { TestBed, inject } from '@angular/core/testing';
import { MaterialModule, MdSnackBar } from '@angular/material';

import { NotificationService } from './notification.service';
import { NO_ERRORS_SCHEMA } from '@angular/core'

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      providers: [NotificationService, MdSnackBar]

    });
  });

  it('should be created', inject([NotificationService, MdSnackBar], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
