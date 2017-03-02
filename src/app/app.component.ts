import { Component } from '@angular/core';
import { Categories, Ideas } from './science_ideas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '100 Greatest Science Discoveries';
  ideas = [];
  categories = Categories;
  showIdeas(category: string) {
    for ( let i = 0; i < Ideas.length; i++ ) {
      // if ( Ideas[i].Category === category ) {
        this.ideas.push(Ideas[i]);
      // }
    }
  }
}
