import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AddPostComponent } from '../components/add-post/add-post.component';

export const RouteComponents = [
    HomeComponent, AddPostComponent
];

export const routesList: Routes = [
    { path: '', component: HomeComponent},
    { path: 'add-post', component: AddPostComponent },
    { path: 'edit-post/:id', component: AddPostComponent }
];
