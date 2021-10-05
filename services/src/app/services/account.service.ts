import { Injectable } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private loggingService: LoggingServiceService) {}
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  onAccountAdded(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }
  onAccountUpdate(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
