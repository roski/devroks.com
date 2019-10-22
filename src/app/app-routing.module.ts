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
        loadChildren: () => import('./blog').then(m => m.BlogModule)
    },
    {
        path: 'admin-panel',
        loadChildren: () => import('./admin-panel').then(m => m.AdminPanelModule)
    },
    {
        path: '**',
        redirectTo: 'blog',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
