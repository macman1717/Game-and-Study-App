import { Component } from '@angular/core';
import { Set } from '../../../set-interface';
import { SetComponent } from '../../components/set/set.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sets-page',
  standalone: true,
  imports: [SetComponent],
  templateUrl: './sets-page.component.html',
  styleUrl: './sets-page.component.css'
})

export class SetsPageComponent {
  constructor(private router: Router) {}

  sets: Set[] = [
    {
      name: "Chemistry 121212k",
      numCards: 12,
    },

    {
      name: "Chemistry 12312k",
      numCards: 12,
    },

    {
      name: "Chemistry 12112k",
      numCards: 12,
    },

    {
      name: "Chemistry 12122k",
      numCards: 12,
    }
  ];
  
  createSet() {
    this.router.navigate(['/create-set']);
  }
}
