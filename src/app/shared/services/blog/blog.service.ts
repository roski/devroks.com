import { Injectable } from '@angular/core';
import { BLOG_POSTS } from '@dr-shared/mock';
import {
    from,
    Observable
} from 'rxjs';
import { Post } from '@dr-shared/models';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    constructor() { }

    getBlogPosts(): Observable<Post[]> {
        return from([BLOG_POSTS]);
    }
}
