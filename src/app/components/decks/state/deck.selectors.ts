import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DECK_FEATURE_KEY, DeckState } from './deck.reducer';

const selectDeckState = createFeatureSelector<DeckState>(DECK_FEATURE_KEY);

export const selectIsLoading = createSelector(
    selectDeckState,
    ({ isLoading }) => isLoading
);



export const selectDecksQueryPage = createSelector(
  selectDeckState,
  ({ query }) => query.page
);


export const selectPokemons = createSelector(
  selectDeckState,
  (state) => state?.pokemonsResponse
);
