import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./components/home/home.component').then(m=>m.HomeComponent) 
    },
    {
        path:'decks',
        loadComponent:()=> import('./components/decks-list/decks-list.component').then(m=>m.DecksListComponent)
    }
];
