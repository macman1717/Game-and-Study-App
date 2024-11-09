import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateSetPageComponent } from './pages/create-set-page/create-set-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateSetPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flashcard-app';
}
