import { Component } from '@angular/core';
import { CardPromptComponent } from '../../components/card-prompt/card-prompt.component';
import { Card } from '../../../card-interface';
import { SubmittedCard } from '../../../submittedCard-interface';
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
  cards: SubmittedCard[] = [
    {
      term: "GGC",
      definition: "Georgia Gwinnett College"
    },
    {
      term: "aaa",
      definition: "a Gwinnett College"
    }
  ];

  deleteCard(cardTerm: string) {
    this.cards = this.cards.filter(card => card.term !== cardTerm);
  }

  addCard() {
    const newCard: SubmittedCard = {
      term: "New Term",
      definition: "New Definition"
    };

    this.cards.push(newCard);
  }

  submitList() {
    console.log(this.setName)
    // @ts-ignore
    console.log(document.getElementById("setName").innerText);
    console.log(this.setName)
    this.setService.createSets(this.cards,"Baba","snolan3");
  }
}
