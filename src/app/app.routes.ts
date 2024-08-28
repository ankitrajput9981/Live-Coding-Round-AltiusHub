import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { HeadComponent } from './head/head.component';

export const routes: Routes = [
    {
        path: "home",
        component : HeadComponent,
        children : [
            {
                path: "start",
                component : StartComponent
            }
        ]
    },
    {
        path: "diff",
        component : StartComponent
    }
];
