import { Component, OnInit } from 'angular2/core';

import { PostsService } from './posts.service';
import { UsersService } from './users.service';
import { SpinnerComponent } from './spinner.component';
import { PaginationComponent } from './pagination.component';

@Component({
  templateUrl: 'app/posts.component.html',
  providers: [PostsService, UsersService],
  directives: [SpinnerComponent, PaginationComponent],
  styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1 }
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
  pagedPosts = [];
  postsPerPage = 12;

  users = [];

  currentPost;
  isLoading;
  isLoadingComments;

  constructor (
    private _postsService: PostsService,
    private _usersService: UsersService
  ) { }

  ngOnInit() {
    this.loadPosts();
    this.loadUsers();
  }

  selectPost(post) {
    this.isLoadingComments = true;
    this.currentPost = post;
    this._postsService.getPostComments(post.id)
      .subscribe(res => this.currentPost.comments = res,
      null, () => this.isLoadingComments = false);
  }

  filterPosts(filter) {
    this.currentPost = null;
    this.posts = [];
    this.pagedPosts = [];
    this.loadPosts(filter);
  }

  private loadPosts(filter?) {
    this.isLoading = true;
    this._postsService.getPosts(filter)
      .subscribe(
        res => {
          this.posts = res;
          // this.pagedPosts = this.getPostsInPage(1);
          this.pagedPosts = _.take(this.posts, this.postsPerPage);
        },
        null, () => this.isLoading = false);
  }

  showPage(page) {
    // this.pagedPosts = this.getPostsInPage($event);
    const firstPage = (page - 1) * this.postsPerPage;
    this.pagedPosts = _.take(_.rest(this.posts, firstPage), this.postsPerPage);
  }

  // private getPostsInPage(page) {
  //   let result = [];
  //   const firstPage = (page - 1) * this.postsPerPage;
  //   const lastPage = Math.min(firstPage + this.postsPerPage, this.posts.length);
  //   for (var i = firstPage; i < lastPage; ++i)
  //     result.push(this.posts[i]);
  //
  //   return result;
  // }

  private loadUsers() {
    this._usersService.getUsers()
      .subscribe(res => this.users = res);
  }
}
