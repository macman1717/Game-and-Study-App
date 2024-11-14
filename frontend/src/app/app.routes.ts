import { Routes } from '@angular/router';
import { SetsPageComponent } from './pages/sets-page/sets-page.component';
import { CreateSetPageComponent } from './pages/create-set-page/create-set-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ViewSetPageComponent } from './pages/view-set-page/view-set-page.component';

export const routes: Routes = [
    { path: "sets", component: SetsPageComponent},
    { path: "create-set", component: CreateSetPageComponent},
    { path: "", component: LoginPageComponent},
    { path: "view-set/:name", component: ViewSetPageComponent}
];
