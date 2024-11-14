import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../../card-interface';
import {SubmittedCard} from "../../../submittedCard-interface";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-prompt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-prompt.component.html',
  styleUrl: './card-prompt.component.css'
})
export class CardPromptComponent {
  @Input() headerText: string = "-1";
  @Input() card!: SubmittedCard;
  @Output() cardDeleted = new EventEmitter();
  @Output() cardUpdated = new EventEmitter();

  onDelete() {
    console.log("Delete");
    this.cardDeleted.emit();
  }

  onUpdate() {
    this.cardUpdated.emit(this.card);
  }
}
