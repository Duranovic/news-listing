import { Injectable } from '@angular/core';
import { NewsStoreActions, NewsStoreSelectors, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { News } from '../../core/models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news$: Observable<News[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>

  constructor(private store$: Store<RootStoreState.State>) {}

  loadTopHeadlines(){
    this.store$.select(
      NewsStoreSelectors.selectAllNewsItems
    );

    this.error$ = this.store$.select(
      NewsStoreSelectors.selectNewsError
    );

    this.isLoading$ = this.store$.select(
      NewsStoreSelectors.selectNewsIsLoading
    );
  }

  loadMoreTopHeadlines(){
    this.store$.dispatch(
      new NewsStoreActions.LoadRequestAction()
    );
  }
}
