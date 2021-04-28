import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/core/models';
import { NewsStoreActions, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.scss']
})
export class NewsGridComponent implements OnInit {
  @Input() containFilter: boolean = false;
  @Input() news: News[];
  
  sortBy: string = "publishedAt";
  showLoadMoreBtn: boolean = true;
  @Input() isLoading: boolean;
  @Input() error: boolean;
  constructor(private store$: Store<RootStoreState.State>, private router: Router) { }

  ngOnInit(): void {

  }

  loadMoreNews(){
    this.store$.dispatch(
      new NewsStoreActions.LoadRequestAction()
    );
    this.showLoadMoreBtn = false;
  }
}
