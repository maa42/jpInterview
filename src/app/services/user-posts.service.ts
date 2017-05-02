import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Response} from '@angular/http';
import {any} from "codelyzer/util/function";

@Injectable()
export class UserPostsService {
   public users;
   public userPost;

  constructor(private  http: Http) { }
  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }





  getUserPostDetails() {
    let users = this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
    let posts = this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    return  Observable.forkJoin(users,posts);

  }


}
