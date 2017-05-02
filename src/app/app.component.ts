import { Component } from '@angular/core';
import {UsersService} from "./services/users.service";
import {UserPostsService} from "./services/user-posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!';


  constructor(private userService: UsersService, private userPostsService: UserPostsService){

  }


  ngOnInit(){
  //  this.onGetUserPostCombine();

  }
  onGetUsers(){
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error) =>console.log(error)
    )
  }

  onGetUserPosts(){
    this.userPostsService.getUsers().subscribe(
      (response) => console.log(response),
      (error) =>console.log(error)
    )
  }



}
