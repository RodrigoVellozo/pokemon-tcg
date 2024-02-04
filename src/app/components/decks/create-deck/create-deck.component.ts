import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DeckFacade } from '../state/deck.facade';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-deck',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss',
})
export class CreateDeckComponent implements OnInit {

  public pokemons$ = this._deckFacade.pokemons$.pipe(tap(x=>console.log(x)));
  
  constructor(private _deckFacade: DeckFacade) {}

  ngOnInit(): void {
    this._deckFacade.loadPokemons({ page: 1, pageSize: 5 });
  }
}
