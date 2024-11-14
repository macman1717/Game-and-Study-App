import { Component } from '@angular/core';
import { Set } from '../../../set-interface';
import { SetComponent } from '../../components/set/set.component';
import {Router} from '@angular/router';
import { ApiSetsService } from '../../services/api.sets.service';
import { Card } from '../../../card-interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-sets-page',
  standalone: true,
  imports: [SetComponent, CardComponent],
  templateUrl: './sets-page.component.html',
  styleUrl: './sets-page.component.css'
})

export class SetsPageComponent {
  constructor(private router: Router, private setsService: ApiSetsService) {}

  sets: Set[] = [];

  createSet() {
    this.router.navigate(['/create-set']);
  }

  viewSet(set: Set) {
    this.router.navigate(['/view-set', set.name]);
  }
  

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('token') || '';
      if (username) {
        this.setsService.getSets(username).subscribe(
          (data: string[]) => {
            this.sets = data.map((name) => ({
              name: name,
              numCards: 0,
              cards: []
            }));
          },
          (error) => {
            console.error('Error fetching sets:', error);
          }
        );
      } else {
        console.warn('Username not found in localStorage');
      }
    }
  }
}
