import {
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import {
    ActivatedRoute,
    Params
} from '@angular/router';
import { BlogService } from '@dr-shared/services';
import { Post } from '@dr-shared/models';

@Component({
    selector: 'dr-blog-stream-item',
    templateUrl: './blog-stream-item.component.html',
    styleUrls: ['./blog-stream-item.component.scss']
})
export class BlogStreamItemComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    postId: number;
    post: Post;

    constructor(private activatedRoute: ActivatedRoute,
                private blogService: BlogService) {
    }

    ngOnInit(): void {
        this.onPostId();
    }

    onPostId() {
        this.subscription = this.activatedRoute.params.subscribe((params: Params) => {
            this.postId = +params.id;
            this.getPost(this.postId);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getPost(postId: number) {
      this.blogService.getPost(postId).subscribe(post => {
        this.post = post;
      });
    }
}
