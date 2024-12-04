import { Routes } from '@angular/router';
import { AuthGaurd } from './core/gaurd/auth.gaurd';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
        canActivate: [AuthGaurd]
    },
     {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGaurd]
     }
];
