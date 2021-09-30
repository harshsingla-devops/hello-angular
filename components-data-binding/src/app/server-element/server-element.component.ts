import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @ViewChild('panelBodyDiv', { static: true }) panelBodyDiv: ElementRef;
  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
  }
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(
      'Text Input is : ' + this.panelBodyDiv.nativeElement.textContent
    );
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log(
      'Text Input is : ' + this.panelBodyDiv.nativeElement.textContent
    );
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
