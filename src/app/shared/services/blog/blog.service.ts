import { Injectable } from '@angular/core';
import { BLOG_POSTS } from '@dr-shared/mock';
import {
    Observable,
    of
} from 'rxjs';
import { Post } from '@dr-shared/models';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor() {
    }

    getPosts(): Observable<Post[]> {
        return of(BLOG_POSTS);
    }

    getPost(id: number): Observable<Post> {
        const post: Post = BLOG_POSTS.filter(p => p.id === id)[0];
        return of(post);
    }

    updatePost(id: number, data: any): Observable<Post>  {
        const post: Post = BLOG_POSTS.filter(p => p.id === id)[0];
        return of(Object.assign(post, data));
    }
}
