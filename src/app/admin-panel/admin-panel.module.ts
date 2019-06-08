import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { RouterModule } from '@angular/router';
import { blogRouted } from '../blog/blog.routes';

@NgModule({
    declarations: [AdminPanelComponent],
    imports: [
        RouterModule.forChild(blogRouted),
        CommonModule
    ]
})
export class AdminPanelModule {
}
