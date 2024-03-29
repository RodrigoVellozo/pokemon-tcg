import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./components/home/home.component').then(m=>m.HomeComponent) 
    },
    {
        path:'decks',
        loadComponent:()=> import('./components/decks/decks-list/decks-list.component').then(m=>m.DecksListComponent)
    },
    {
        path:'createDeck',
        loadComponent:()=> import('./components/decks/create-deck/create-deck.component').then(m=>m.CreateDeckComponent),
    }
];
