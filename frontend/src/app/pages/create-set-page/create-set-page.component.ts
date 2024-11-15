import { Component } from '@angular/core';
import { CardPromptComponent } from '../../components/card-prompt/card-prompt.component';
import { SubmittedCard } from '../../../submittedCard-interface';
import {ApiSetsService} from "../../services/api.sets.service";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-set-page',
  standalone: true,
  imports: [FormsModule, CardPromptComponent],
  templateUrl: './create-set-page.component.html',
  styleUrl: './create-set-page.component.css'
})
export class CreateSetPageComponent {
  constructor(private setService : ApiSetsService, private router : Router) { }
  setName: string = "";
  submitted = true;
  createError!: string;
  
  cards: SubmittedCard[] = [
    {
      term: "Sample Term",
      definition: "A sample term with no real meaning"
    },
  ];

  deleteCard(cardTerm: string) {
    this.cards = this.cards.filter(card => card.term !== cardTerm);
  }

  updateCard(updatedCard: SubmittedCard) {
    this.cards = this.cards.filter(card => card.term !== updatedCard.term);
    this.cards.push(updatedCard);
  }

  addCard() {
    const newCard: SubmittedCard = {
      term: "New Term",
      definition: "New Definition"
    };

    this.cards.push(newCard);
  }

  submitList() {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('token');
      if (username) {
        console.log(this.cards);
        this.setService.createSets(this.cards, this.setName, username);
        this.router.navigate(['/sets']).then(() => {
          this.router.navigate([`/view-set/${this.setName}`]).then(() => {
            window.location.reload();
          });
        });
        
        return;
      }

      this.createError = "You must be logged in to create a set.";
    }
    
  }
}
