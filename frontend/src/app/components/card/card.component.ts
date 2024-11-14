import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../card-interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;
  @Output() cardDeleted = new EventEmitter();

  onDelete() {
    this.cardDeleted.emit(this.card.id);
  }
}
