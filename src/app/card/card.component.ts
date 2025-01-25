import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  post!: Post;
}
