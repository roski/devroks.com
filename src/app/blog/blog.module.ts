import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { blogRouted } from './blog.routes';
import { BlogPostPreviewComponent } from './blog-post-preview/blog-post-preview.component';

@NgModule({
  declarations: [BlogComponent, BlogPostPreviewComponent],
  imports: [
    RouterModule.forChild(blogRouted),
    CommonModule
  ]
})
export class BlogModule { }
