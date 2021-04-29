import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { News } from 'src/app/core/models';
import { NewsService } from 'src/app/news/services/news.service';
import { DataService } from '../../core/services';
import * as featureActions from './actions';

@Injectable()
export class NewsEverythingStoreEffects {
  constructor(private dataService: DataService,private newsService: NewsService, private actions$: Actions) {}

  @Effect()
  loadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoadRequestAction>(
      featureActions.ActionTypes.LOAD_REQUEST
    ),
    startWith(new featureActions.LoadRequestAction()),
    switchMap(action =>
      {
      return this.dataService
        .getEverything(this.newsService.searchKey, this.newsService.sortBy)
        .pipe(
          map(
            (items: News[]) =>
              new featureActions.LoadSuccessAction({
                items
              })
            ),
            catchError(error =>
              observableOf(new featureActions.LoadFailureAction({ error }))
            )
      	)
            }
     )
  );
}