import { Component, OnInit } from 'angular2/core';

import { PostService } from './services/post.service';

import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: 'post-placeholder',
  templateUrl: 'app/templates/post.template.html',
  providers: [PostService, HTTP_PROVIDERS]
})

export class PostComponent implements OnInit {

  isLoading = true;

  private content = '';

  constructor(private _postService: PostService) {
    // this._postService.createPost(
    //   {userId: 1, title: "a", body: "b"}
    // );
  }

  ngOnInit() {

    this._postService.getPosts()
      .subscribe(posts => {
        this.content = posts[0].body;
      }, null, () => {
        setTimeout(() => this.isLoading = false, 500);
      });

    this._postService.getPostsPromise()
      .then(posts => {
        setTimeout(() => this.isLoading = false, 500);
        console.log(posts[0].body)
      });
  }
}
