import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  public createPost(title: string, content: string) {
    const postData = { title: title, content: content };
    this.http
      .post('http://localhost:3000/api/v1/blogs', postData)
      .subscribe((data) => {
        console.log(`DATA RECEIVED is : ${data}`);
      });
  }

  public fetchPosts() {
    return this.http.get('http://localhost:3000/api/v1/blogs').pipe(
      map((responseData: any) => {
        const blogsPosts = responseData.blogs;
        const resultPosts = [];
        blogsPosts.forEach((post) => {
          delete post.__v;
          resultPosts.push(post);
        });
        return resultPosts;
      })
    );
  }
}
