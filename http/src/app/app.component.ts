import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post('http://localhost:3000/api/v1/blogs', postData)
      .subscribe((data) => {
        console.log(`DATA RECEIVED is : ${data}`);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchProducts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchProducts() {
    this.http
      .get('http://localhost:3000/api/v1/blogs')
      .pipe(
        map((responseData: any) => {
          const blogsPosts = responseData.blogs;
          const resultPosts = [];
          blogsPosts.forEach((post) => {
            delete post._id;
            delete post.__v;
            resultPosts.push(post);
          });
          return resultPosts;
        })
      )
      .subscribe((posts: any) => {
        console.log(posts);
      });
  }
}
