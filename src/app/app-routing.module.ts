import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'blog',
        pathMatch: 'full'
    },
    {
        path: 'blog',
        loadChildren: './blog#BlogModule'
    },
    {
        path: 'admin-panel',
        loadChildren: './admin-panel#AdminPanelModule'
    },
    {
        path: '**',
        redirectTo: '/blog',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
