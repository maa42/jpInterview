import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserPostsService} from "../../services/user-posts.service";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  userPosts= [];
  users= [];
  userPostsCombined= [];
  txtSearch = "";
  constructor(private userService: UsersService, private userPostsService: UserPostsService) { }

  ngOnInit() {
    this.onGetUserPostCombine();
  }

  onGetUserPostCombine(){
    this.userPostsService.getUserPostDetails().subscribe(
      data => {
        this.users = data[0];
        this.userPosts = data[1];
        this.userPostsCombined = this.combine(this.userPosts,this.users)
      }
    );
  }

  combine(x,y){
    var z = x;
    for (var i=0;i<x.length; i++){
      z[i].name ="";
      for (var j=0;j<y.length;j++){
        if (x[i].userId === y[j].id) {
          z[i].username = y[j].username;
          z[i].email = y[j].email;


        }
      }
    }
    return z;
  }

}
