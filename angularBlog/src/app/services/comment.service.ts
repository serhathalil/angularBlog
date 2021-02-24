import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  private apiURL: string = 'https://localhost:44329/api/Yorums';

  loading: boolean ;
  addComment(comment: Comment) {
    this.loading = true;
    return this.httpClient.post(this.apiURL, comment).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  commentList(makaleId:number){
    return this.httpClient.get<Comment[]>(`${this.apiURL}/${makaleId}`);
  }
}
