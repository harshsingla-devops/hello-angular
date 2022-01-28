import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'datatables';
  dtOptions: any = {};
  //dtOptions: any = {};
  posts = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private apiService: PostService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      // Declare the use of the extension in the dom parameter
      //dom: 'Brtip',
      // Configure the buttons
      // buttons: [
      //   'columnsToggle',
      //   'colvis',
      //   'copy',
      //   'print',
      //   'excel',
      //   {
      //     text: 'Some button',
      //     key: '1',
      //     action: function (e, dt, node, config) {
      //       alert('Button activated');
      //     },
      //   },
      // ],
    };
    this.getData();
  }

  getData(): void {
    this.apiService.getData().subscribe((data) => {
      this.posts = data;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
