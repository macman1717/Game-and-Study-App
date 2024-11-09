import { Component } from '@angular/core';
import { CardPromptComponent } from '../../components/card-prompt/card-prompt.component';
import { Card } from '../../../card-interface';

@Component({
  selector: 'app-create-set-page',
  standalone: true,
  imports: [CardPromptComponent],
  templateUrl: './create-set-page.component.html',
  styleUrl: './create-set-page.component.css'
})
export class CreateSetPageComponent {
  cards: Card[] = [
    {
      id: 1,
      term: "GGC",
      definition: "Georgia Gwinnett College"
    },

    {
      id: 2,
      term: "aaa",
      definition: "a Gwinnett College"
    }
  ];

  deleteCard(cardId: number) {
    this.cards = this.cards.filter(card => card.id !== cardId);
  }
}
