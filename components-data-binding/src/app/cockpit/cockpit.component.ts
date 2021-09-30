import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContent') serverContent: ElementRef;

  @Output() onServerAdd = new EventEmitter<{ name: string; content: string }>();
  @Output('bpCreated') onBluePrintAdd = new EventEmitter<{
    name: string;
    content: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement) {
    this.onServerAdd.emit({
      // name: this.newServerName,
      name: serverName.value,
      // content: this.newServerContent,
      content: this.serverContent.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.onBluePrintAdd.emit({
      // name: this.newServerName,
      name: serverName.value,
      // content: this.newServerContent,
      content: this.serverContent.nativeElement.value,
    });
  }
}
