import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    /*{
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
        ]
    },*/
    { path: '',  component: HomeComponent}

];

export const routing = RouterModule.forRoot(routes);
