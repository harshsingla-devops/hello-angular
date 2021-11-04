import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private obsSubscription: Subscription;
  private customObservableSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.obsSubscription = interval(1000).subscribe((count) => {
      console.log(count);
    });

    const customObservable = Observable.create((observer) => {
      let c = 0;
      setInterval(() => {
        observer.next(c);
        c++;
      }, 1000);
    });

    this.customObservableSubscription = customObservable.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnDestroy() {
    this.obsSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
