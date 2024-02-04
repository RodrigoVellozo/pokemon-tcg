import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { DeckEffects } from './components/decks/state/deck.effects';
import { deckReducer } from './components/decks/state/deck.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    provideStore({'decks': deckReducer}),
    provideEffects([DeckEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false}),
  ]
};
