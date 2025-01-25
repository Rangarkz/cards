import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { Post } from './post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: Post[] = [{
    title: "Neat tree",
    username: "nature",
    image: "assets/tree.jpeg",
    content: "I saw this neat tree today"
  },
  {
    title: "Snowy mountain",
    username: "mountainlover",
    image: "assets/mountain.jpeg",
    content: "Here is a picture of a snowy mountain"
  },
  {
    title: "Mountain Biking",
    username: "biking12222",
    image: "assets/biking.jpeg",
    content: "I did some biking today"
  }
  ];
}
