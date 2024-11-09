import { Component } from '@angular/core';
import { CardPromptComponent } from '../../components/card-prompt/card-prompt.component';
import { Card } from '../../../card-interface';
import {RouterOutlet} from "@angular/router";
import {SetService} from "../../set.service";
import {ApiSetsService} from "../../services/api.sets.service";

@Component({
  selector: 'app-create-set-page',
  standalone: true,
  imports: [CardPromptComponent],
  templateUrl: './create-set-page.component.html',
  styleUrl: './create-set-page.component.css'
})
export class CreateSetPageComponent {
  constructor(private setService : ApiSetsService) { }
  setName: string = "";
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

  addCard() {
    const newCard: Card = {
      id: this.cards.length + 1,
      term: "New Term",
      definition: "New Definition"
    };

    this.cards.push(newCard);
  }

  submitList() {
    this.setService.createSets(this.cards,"Set 4","snolan3");
  }
}
