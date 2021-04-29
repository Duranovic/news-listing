import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { News } from 'src/app/core/models';
import { NewsEverythingStoreSelectors, NewsStoreSelectors, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleId: string;

  article$: Observable<News>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>

  constructor(private route: ActivatedRoute, private store$: Store<RootStoreState.State>, private newsSerivce: NewsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.articleId = x.id;
      this.getArticle();
    })
  }

  getArticle(){
    if(this.newsSerivce.searchKey == ''){
      this.article$ = this.store$.select(
        NewsStoreSelectors.selectNewsById(this.articleId)
      );
    }else{
      this.article$ = this.store$.select(
        NewsEverythingStoreSelectors.selectNewsById(this.articleId)
      );
    }


    this.error$ = this.store$.select(
      NewsStoreSelectors.selectNewsError
    );

    this.isLoading$ = this.store$.select(
      NewsStoreSelectors.selectNewsIsLoading
    );
  }
}
