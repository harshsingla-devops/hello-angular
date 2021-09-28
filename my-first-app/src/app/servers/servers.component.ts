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
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
