import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //To Make it as component selector
  // selector: '[app-servers]', :: To make it as attribute selector
  // selector: '.app-servers', :: To make it as class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';

  onServerCreation(): void {
    this.serverCreationStatus = 'Server was created!';
  }

  onServerNameUpdate(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
