import { Component } from '@angular/core';
import { NewsApiGetTopHeadlinesService } from './core/services/api/news-api-get-top-headlines.service';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-listing-angular';
  constructor(topHeadlinesService :NewsApiGetTopHeadlinesService){
    topHeadlinesService.getTopHeadlines().pipe(
      map(res => {
        console.log(res);
    })
    )
  }
}
