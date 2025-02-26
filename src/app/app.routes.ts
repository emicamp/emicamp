import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {ShopComponent} from './shop/shop.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '*', component: WelcomeComponent },
    { path: '', component: WelcomeComponent },
    { path: 'shop', component: ShopComponent}
];
