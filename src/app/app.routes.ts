import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '*', component: WelcomeComponent },
    { path: '', component: WelcomeComponent },
];
