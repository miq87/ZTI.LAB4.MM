import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { PostClass } from '../post-class';
import { CommentClass } from '../comment-class';


@Injectable({
providedIn: 'root'
})
export class JsonService {
  headers: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers = this.headers.set('Content-Type', 'application/json');
  }
  
  getList(name: string): Observable<PostClass[]> {
    const url = `https://jsonplaceholder.typicode.com/${name}`;
    return this.http.get<PostClass[]>(url);
  }
  getObject(name: string, id: number): Observable<PostClass> {
    const url = `https://jsonplaceholder.typicode.com/${name}/${id}`;
    return this.http.get<PostClass>(url);
  }
  getByUserId(name: string, id: number): Observable<PostClass[]> {
    const param = new HttpParams().set('userId', id.toString())
    const url = `https://jsonplaceholder.typicode.com/${name}`;
    return this.http.get<PostClass[]>(url, { params: param });
  }
  // HTTP - ZADANIE 2 - start
  getByPostId(name: string, id: number): Observable<CommentClass[]> {
    const param = new HttpParams().set('postId', id.toString())
    const url = `https://jsonplaceholder.typicode.com/${name}`;
    return this.http.get<CommentClass[]>(url, { params: param });
  }
  getObject2(name: string, id: number): Observable<CommentClass[]> {
    const url = `https://jsonplaceholder.typicode.com/${name}/${id}/comments`;
    return this.http.get<CommentClass[]>(url);
  }
  // HTTP - ZADANIE 2 - end

}