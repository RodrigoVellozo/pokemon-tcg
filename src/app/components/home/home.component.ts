import { Component } from '@angular/core';
import { SearchComponent } from '../../shared/ui/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
