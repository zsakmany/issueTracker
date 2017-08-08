import { MdSnackBarConfig } from '@angular/material';

export interface INotificationService {
  note(msg: string, config?: MdSnackBarConfig): void;
}
