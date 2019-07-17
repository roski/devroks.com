import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { blogRouted } from './blog.routes';
import { BlogStreamComponent } from './blog-stream';
import { BlogStreamItemPreviewComponent } from './blog-stream-item-preview';
import { BlogStreamItemComponent } from './blog-stream-item';


@NgModule({
    declarations: [
        BlogComponent,
        BlogStreamComponent,
        BlogStreamItemComponent,
        BlogStreamItemPreviewComponent,
    ],
    imports: [
        RouterModule.forChild(blogRouted),
        CommonModule
    ]
})
export class BlogModule {
}
