import { Component, OnInit } from 'angular2/core';

import { PostsService } from './posts.service';

@Component({
  templateUrl: 'app/posts.component.html',
  providers: [PostsService]
})

export class PostsComponent implements OnInit {

  posts = [];
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

}
