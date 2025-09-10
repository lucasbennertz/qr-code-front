import { Routes } from '@angular/router';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';

export const routes: Routes = [
    {path: "", component: MainScreenComponent, pathMatch: "full"}
];
