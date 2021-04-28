import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { News } from 'src/app/core/models';
import { NewsStoreSelectors, RootStoreState } from 'src/app/root-store';
import { Store } from '@ngrx/store';

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

  constructor(private route: ActivatedRoute, private store$: Store<RootStoreState.State>) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.articleId = x.id;
      this.getArticle();
    })
  }

  getArticle(){
    this.article$ = this.store$.select(
      NewsStoreSelectors.selectNewsById(this.articleId)
    );

    this.error$ = this.store$.select(
      NewsStoreSelectors.selectNewsError
    );

    this.isLoading$ = this.store$.select(
      NewsStoreSelectors.selectNewsIsLoading
    );
  }
}
