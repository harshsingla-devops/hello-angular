import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './models/post.model';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  public createPost(title: string, content: string) {
    const postData = { title: title, content: content };
    return this.http.post(environment.API_END_POINT, postData);
  }

  public fetchPosts() {
    return this.http.get(environment.API_END_POINT).pipe(
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
    return this.http.delete(environment.API_END_POINT);
  }
}
