import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'about', loadChildren: './+about/about.module#AboutModule' },
    { path: 'portfolio', loadChildren: './+portfolio/portfolio.module#PortfolioModule' },
    { path: 'hire', loadChildren: './+hire/hire.module#HireModule' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [];