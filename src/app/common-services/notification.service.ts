import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { INotificationService } from 'app/common-services/inotification-service';

@Injectable()
export class NotificationService implements INotificationService {

  constructor(private snackBar: MdSnackBar) { }

  public note(msg: string, config?: MdSnackBarConfig) {
    this.snackBar.open(msg, 'Note', config || { duration: 3000 });
  }

}
