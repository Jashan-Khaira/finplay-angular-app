import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./presentation/pages/sign-in/sign-in.component";

const routes : Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        loadComponent: () => import('./presentation/pages/sign-in/sign-in.component').then(m => m.SignInComponent)
},
    {
        path: 'sign-up',
        loadComponent: () => import('./presentation/pages/sign-up/sign-up.component').then(m => m.SignUpComponent)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}