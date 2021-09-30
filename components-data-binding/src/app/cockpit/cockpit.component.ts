import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() onServerAdd = new EventEmitter<{ name: string; content: string }>();
  @Output('bpCreated') onBluePrintAdd = new EventEmitter<{
    name: string;
    content: string;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onAddServer() {
    this.onServerAdd.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.onBluePrintAdd.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
