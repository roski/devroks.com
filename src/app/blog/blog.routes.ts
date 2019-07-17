import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogStreamComponent } from './blog-stream';
import { BlogStreamItemComponent } from './blog-stream-item';

export const blogRouted: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            {
                path: '',
                component: BlogStreamComponent
            },
            {
                path: 'post/:id',
                component: BlogStreamItemComponent
            }
        ]
    }
];
