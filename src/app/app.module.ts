import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserPostComponent } from './component/user-post/user-post.component';
import { RouterModule } from '@angular/router';
import {UsersService} from "./services/users.service";
import {UserPostsService} from "./services/user-posts.service";
import {SearchFilterPipe} from "./pipes/search-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    UserPostComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserPostComponent

      },
      {
        path:'userPosts',
        component: UserPostComponent
      }
    ])
  ],
  providers: [UsersService,UserPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
