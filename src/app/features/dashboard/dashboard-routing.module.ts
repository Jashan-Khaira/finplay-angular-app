import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes : Routes = [
    {
        path: '',
        loadComponent : () => import('./presentation/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: 'home',
                loadComponent : () => import('../home/presentation/pages/home/home.component').then(m => m.HomeComponent),
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'portfolio',
                loadComponent : () => import('../portfolio/presentation/pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
            },
            {
                path: 'market-trade',
                loadComponent : () => import('../market/presentation/pages/market-trade/market-trade.component').then(m => m.MarketTradeComponent),
            }, 
        ]
    },

    // {
    //     path: 'dashboard',
    //     loadChildren : () => import('./presentation/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    //     children: [
    //         {
    //             path: 'home',
    //             loadChildren: () => import('./presentation/pages/home/home.component').then(m => m.HomeComponent)
    //         }
    //     ]
    // }
] 


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}