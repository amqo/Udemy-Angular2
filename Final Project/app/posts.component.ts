import { Component, OnInit } from 'angular2/core';

import { PostsService } from './posts.service';
import { SpinnerComponent } from './spinner.component';

@Component({
  templateUrl: 'app/posts.component.html',
  providers: [PostsService],
  directives: [SpinnerComponent],
  styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; }
        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e50;
        }
    `],
})

export class PostsComponent implements OnInit {

  posts = [];
  currentPost;

  isLoading = true;

  constructor (private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getPosts()
      .subscribe(
        res => this.posts = res,
        null, () => {
          this.isLoading = false;
        });
  }

  selectPost(post) {
    this.currentPost = post;
  }

}
