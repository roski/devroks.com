import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { blogRouted } from './blog.routes';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    RouterModule.forChild(blogRouted),
    CommonModule
  ]
})
export class BlogModule { }
