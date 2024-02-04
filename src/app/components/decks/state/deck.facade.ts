import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemons } from './deck.actions';
import { DeckState } from './deck.reducer';
import * as DeckSelectors from './deck.selectors';
import { Query } from '../../../models/pokemon-query';

@Injectable({ providedIn: 'root' })
export class DeckFacade {
  public readonly isLoading$ = this._store.select(
    DeckSelectors.selectIsLoading
  );

  public readonly pokemons$ = this._store.select(DeckSelectors.selectPokemons);

  constructor(private readonly _store: Store<DeckState>) {}

  public loadPokemons(query: Query): void {
    this._store.dispatch(loadPokemons({ query }));
  }
}
