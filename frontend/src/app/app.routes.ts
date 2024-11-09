import { Routes } from '@angular/router';
import { SetsPageComponent } from './pages/sets-page/sets-page.component';
import { CreateSetPageComponent } from './pages/create-set-page/create-set-page.component';

export const routes: Routes = [
    { path: "sets", component: SetsPageComponent},
    { path: "create-set", component: CreateSetPageComponent},
];
