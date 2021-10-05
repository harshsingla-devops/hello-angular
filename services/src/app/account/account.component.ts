import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingServiceService } from '../services/logging-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{
  //   id: number;
  //   newStatus: string;
  // }>();

  constructor(
    private loggingService: LoggingServiceService,
    private accountService: AccountService
  ) {}

  onSetTo(status: string) {
    // this.statusChanged.emit({ id: this.id, newStatus: status });
    // console.log('A server status changed, new status: ' + status);
    this.accountService.onAccountUpdate(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
