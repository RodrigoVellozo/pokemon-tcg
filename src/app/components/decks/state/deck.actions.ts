import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props, union } from "@ngrx/store";
import { Data } from "../../../models/pokemon-data";
import { Query } from "../../../models/pokemon-query";

export enum DeckActionsEnum {
    LOAD_POKEMONS = '[Decks] Load Pokemons',
    LOAD_POKEMONS_SUCCESS = '[Decks] Load Pokemons success',
    LOAD_POKEMONS_FAILURE = '[Decks] Load Pokemons failure',

}

export const loadPokemons = createAction(
    DeckActionsEnum.LOAD_POKEMONS,
    props<{ query: Query }>()
  );
  
  export const loadPokemonsSuccess = createAction(
    DeckActionsEnum.LOAD_POKEMONS_SUCCESS,
    props<{ pokemonsResponse: Data[]; query: Query }>()
  );
  
  export const loadPokemonsFailure = createAction(
    DeckActionsEnum.LOAD_POKEMONS_FAILURE,
    props<{ error: HttpErrorResponse }>()
  );

  const _managePokemonsActionsUnion = union({
    loadPokemons,
    loadPokemonsSuccess,
    loadPokemonsFailure,

  });
  
  export type ManagePokemonsActionsUnion = typeof _managePokemonsActionsUnion;