import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/core/models';
import { NewsStoreSelectors, RootStoreState, NewsEverythingStoreActions, NewsEverythingStoreSelectors, NewsEverythingStoreState } from 'src/app/root-store';

import { NewsService } from '../services/news.service';
import { Store } from '@ngrx/store';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
  news$: Observable<News[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>

  newsEverything$: Observable<News[]>;
  errorEverything$: Observable<any>;
  isLoadingEverything$: Observable<boolean>

  searchKey: string = '';
  
  constructor(private newsSrvice: NewsService, private store$: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.news$ = this.store$.select(
      NewsStoreSelectors.selectAllNewsItems
    );

    this.error$ = this.store$.select(
      NewsStoreSelectors.selectNewsError
    );

    this.isLoading$ = this.store$.select(
      NewsStoreSelectors.selectNewsIsLoading
    );


    this.errorEverything$ = this.store$.select(
      NewsEverythingStoreSelectors.selectNewsError
    );

    this.isLoadingEverything$ = this.store$.select(
      NewsEverythingStoreSelectors.selectNewsIsLoading
    );

  }

  search(searchKey: string){
    this.searchKey = searchKey;
    this.newsSrvice.searchKey = searchKey;

    if(!this.newsEverything$){
      this.newsEverything$ = this.store$.select(
        NewsEverythingStoreSelectors.selectAllNewsItems
      );
    }

    this.store$.dispatch(
      new NewsEverythingStoreActions.LoadRequestAction()
    );
  }
}
