import {
    Component,
    OnInit
} from '@angular/core';
import { Post } from '@dr-shared/models';
import { BlogService } from '@dr-shared/services';


@Component({
    selector: 'dr-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    posts: Post[];

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.blogService.getBlogPosts().subscribe(posts => {
            console.log(posts);
            this.posts = posts;
        });
    }
}
