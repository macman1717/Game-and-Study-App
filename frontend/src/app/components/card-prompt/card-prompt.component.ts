import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../../card-interface';
import {SubmittedCard} from "../../../submittedCard-interface";

@Component({
  selector: 'app-card-prompt',
  standalone: true,
  imports: [],
  templateUrl: './card-prompt.component.html',
  styleUrl: './card-prompt.component.css'
})
export class CardPromptComponent {
  @Input() headerText: string = "-1";
  @Input() card!: SubmittedCard;
  @Output() cardDeleted = new EventEmitter();

  onDelete() {
    this.cardDeleted.emit();
  }
}
