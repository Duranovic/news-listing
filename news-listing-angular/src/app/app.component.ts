import { NewsApiGetTopHeadlinesService } from './core/services/api/news-api-get-top-headlines.service';
import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { News } from './core/models';

import {
  RootStoreState,
  NewsStoreActions,
  NewsStoreSelectors
} from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-listing-angular';

  news$: Observable<News[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>, topHeadlinesService :NewsApiGetTopHeadlinesService){
    topHeadlinesService.getTopHeadlines().pipe(
      map(res => {
        console.log(res);
    })
    )
  }

  ngOnInit() {
    this.store$.select(
      NewsStoreSelectors.selectAllNewsItems
    ).subscribe(x=>{
      console.log(x);
    });

    this.error$ = this.store$.select(
      NewsStoreSelectors.selectNewsError
    );

    this.isLoading$ = this.store$.select(
      NewsStoreSelectors.selectNewsIsLoading
    );
 
  }
  loadNews(){
    this.store$.dispatch(
      new NewsStoreActions.LoadRequestAction()
    );
  }
}
