import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on } from '@ngrx/store';

import * as action from './deck.actions';
import { Query } from '../../../models/pokemon-query';
import { Data } from '../../../models/pokemon-data';
import { Deck } from '../../../models/deck';

export const DECK_FEATURE_KEY = 'deckReducer';
export interface DeckState {
  isLoading: boolean;

  query: Query;

  pokemonsResponse: Data[];

  decksResponse: Deck[];

  error?: HttpErrorResponse;
}

export const initialState = {
 
};

const _deckReducer = createReducer(
  initialState,
  on(action.loadPokemons, (state , action) => ({
    ...state,
    isLoading: true,
    error: undefined,
  })),

  on(action.loadPokemonsSuccess, (state, action) => {
    return {
      ...state,
      pokemonsResponse: [
        ...action.pokemonsResponse,
      ] as any[],
      isLoading: false,
      error: undefined,
    };
  }),

  on(action.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function deckReducer(state = initialState, action: Action) {
  return _deckReducer(state, action);
}
