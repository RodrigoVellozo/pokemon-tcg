import { Component } from '@angular/core';
import { SearchComponent } from '../../../shared/ui/search/search.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardComponent } from '../../../shared/ui/card/card.component';

@Component({
  selector: 'app-decks-list',
  standalone: true,
  imports: [
    RouterModule,
    SearchComponent,
    CardComponent
  ],
  templateUrl: './decks-list.component.html',
  styleUrl: './decks-list.component.scss'
})
export class DecksListComponent {

}
