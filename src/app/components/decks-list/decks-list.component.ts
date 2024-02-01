import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/ui/search/search.component';

@Component({
  selector: 'app-decks-list',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './decks-list.component.html',
  styleUrl: './decks-list.component.scss'
})
export class DecksListComponent {

}
