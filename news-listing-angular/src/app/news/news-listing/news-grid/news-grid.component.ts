import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/core/models';
import { NewsEverythingStoreActions, NewsStoreActions, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent {
  @Input() containFilter: boolean = false;
  @Input() news: News[];
  @Input() isLoading: boolean;
  @Input() error: boolean;
  
  sortBy: string = "publishedAt";
  showLoadMoreBtn: boolean = true;

  constructor(private store$: Store<RootStoreState.State>, private newsSrvice: NewsService) { }

  onOrderByChange(){
    this.newsSrvice.sortBy = this.sortBy;
      this.store$.dispatch(
        new NewsEverythingStoreActions.LoadRequestAction
      );
  }

  loadMoreNews(){
    this.store$.dispatch(
      new NewsStoreActions.LoadRequestAction()
    );
    this.showLoadMoreBtn = false;
  }
  
}
