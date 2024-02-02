import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-deck',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './create-deck.component.html',
  styleUrl: './create-deck.component.scss'
})
export class CreateDeckComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

}
