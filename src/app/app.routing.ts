import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';

const APP_ROUTES: Routes = [
    { path: 'task', component: TaskComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent , pathMatch: 'full' },

];

export const routing = RouterModule.forRoot(APP_ROUTES);