import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: '**', component: LoginComponent },
];
