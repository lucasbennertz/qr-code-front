import { Routes } from '@angular/router';
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SignScreenComponent } from './screens/sign-screen/sign-screen.component';

export const routes: Routes = [
    {path: "", component: MainScreenComponent, pathMatch: "full"},
    {path: "sign", component: SignScreenComponent , pathMatch: "full"} 
];
