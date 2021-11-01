import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './models/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  public createPost(title: string, content: string) {
    const postData = { title: title, content: content };
    // return this.http.post('http://localhost:3000/api/v1/blogs', postData);
    return this.http.post(
      ' https://angular-project-d720a-default-rtdb.firebaseio.com/posts.json',
      postData
    );
  }

  public fetchPosts() {
    return this.http
      .get(
        'https://angular-project-d720a-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      );
  }

  public deletePosts() {
    return this.http.delete(
      'https://angular-project-d720a-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
