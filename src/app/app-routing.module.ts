import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

import { AdminGuard } from './shared/guards/admin.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
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