import { Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

export const blogRouted: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: []
    }
];
