import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import { of } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { PokemonService } from '../../../services/pokemon.service';
import {
  DeckActionsEnum,
  loadPokemonsFailure,
  loadPokemonsSuccess,
} from './deck.actions';
import { DeckFacade } from './deck.facade';

@Injectable()
export class DeckEffects {
  public readonly loadPokemons$ = createEffect(() =>
    this._actions$.pipe(
      ofType(DeckActionsEnum.LOAD_POKEMONS),
      switchMap((query) => {
        return this.pokemonService.getPokemons(query).pipe(
          map((pokemonsResponse) =>
            loadPokemonsSuccess({ pokemonsResponse, query })
          ),
          catchError((error) => of(loadPokemonsFailure(error)))
        );
      })
    )
  );

  constructor(
    private _actions$: Actions<any>,
    private pokemonService: PokemonService,
    private _deckFacade: DeckFacade
  ) {}
}
