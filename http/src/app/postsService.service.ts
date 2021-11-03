import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Post } from './models/post.model';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  public createPost(title: string, content: string) {
    const postData = { title: title, content: content };
    return this.http.post(environment.API_END_POINT, postData, {
      observe: 'response',
    });
  }

  public fetchPosts() {
    return this.http
      .get(environment.API_END_POINT, {
        headers: new HttpHeaders({
          'Custom-Header': 'Hello',
        }),
        params: new HttpParams().set('print', 'pretty'),
      })
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
    return this.http
      .delete(environment.API_END_POINT, {
        observe: 'events',
      })
      .pipe(
        tap((event) => {
          if (event.type === HttpEventType.Sent)
            console.log('Request has been sent to the server!');
          if (event.type === HttpEventType.Response)
            console.log('Response has been received from the server');
        })
      );
  }
}
