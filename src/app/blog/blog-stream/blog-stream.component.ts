import { Component, OnInit } from '@angular/core';
import { Post } from '@dr-shared/models';
import { BlogService } from '@dr-shared/services';

@Component({
  selector: 'dr-blog-stream',
  templateUrl: './blog-stream.component.html',
  styleUrls: ['./blog-stream.component.scss']
})
export class BlogStreamComponent implements OnInit {

  posts: Post[];

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}
