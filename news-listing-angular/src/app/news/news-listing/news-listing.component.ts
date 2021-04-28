import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/core/models';
import { NewsStoreActions, NewsStoreSelectors, RootStoreState } from 'src/app/root-store';
import { NewsService } from '../services/news.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.scss']
})
export class NewsListingComponent implements OnInit {
  news$: Observable<News[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>
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
  }

  search(searchKey: string){
    this.searchKey = searchKey;
  }
}
