import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ApiSetsService } from '../../services/api.sets.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../card-interface';

@Component({
  selector: 'app-view-set-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './view-set-page.component.html',
  styleUrl: './view-set-page.component.css',
})
export class ViewSetPageComponent {
  constructor(
    private route: ActivatedRoute,
    private setsService: ApiSetsService
  ) {}

  setCards!: Card[];
  setName!: string;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('token');
      const setName = this.route.snapshot.paramMap.get('name');
      if (username && setName) {
        this.setsService.getCards(username, setName).subscribe(
          (data: Card[]) => {
            this.setCards = data;
            this.setName = setName;
            console.log(this.setCards);
          },
          (error: any) => {
            console.error('Error fetching sets:', error);
          }
        );
      } else {
        console.warn('Username not found in localStorage');
      }
    }
  }
}
