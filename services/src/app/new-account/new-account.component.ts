import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingServiceService } from '../services/logging-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LoggingServiceService,
    private accountService: AccountService
  ) {
    this.accountService.statusChanged.subscribe((status: string) => {
      alert(status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.accountService.onAccountAdded(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
