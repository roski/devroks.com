import { Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';

export const adminPanelRouted: Routes = [
    {
        path: '',
        component: AdminPanelComponent,
        children: []
    }
];
