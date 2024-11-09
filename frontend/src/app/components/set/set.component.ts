import { Component, Input } from '@angular/core';
import { Set } from '../../../set-interface';

@Component({
  selector: 'app-set',
  standalone: true,
  imports: [],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css'
})
export class SetComponent {
  @Input() set!: Set;
}
