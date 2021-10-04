import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]',
})
export class BasicHighlight implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.background = 'green';
  }
}
