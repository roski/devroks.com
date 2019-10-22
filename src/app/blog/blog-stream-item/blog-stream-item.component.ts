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
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as ballonEditor from '@ckeditor/ckeditor5-build-balloon';

@Component({
    selector: 'dr-blog-stream-item',
    templateUrl: './blog-stream-item.component.html',
    styleUrls: ['./blog-stream-item.component.scss']
})
export class BlogStreamItemComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    postId: number;
    post: Post;
    editor = ballonEditor;

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
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getPost(postId: number) {
        this.blogService.getPost(postId).subscribe(post => {
            this.post = post;
        });
    }

    updatePost(postId: number, data: any) {
        this.blogService.updatePost(postId, data).subscribe(post => {
            console.log('updatePost', post);
        });
    }

    onChange({editor}: ChangeEvent) {
        const data = editor.getData();
        this.updatePost(this.postId, {content: data});
        console.log('onChange', data);
    }
}
