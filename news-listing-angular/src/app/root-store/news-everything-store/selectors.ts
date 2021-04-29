import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { News } from 'src/app/core/models/news';
		
import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading ?? false;

export const selectNewsState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('news-everything');


export const selectAllNewsItems: (
  state: object,
) => News[] = featureAdapter.getSelectors(selectNewsState).selectAll;

export const selectNewsById = (id: string) =>
  createSelector(selectAllNewsItems, (allNews: News[]) => {
    if (allNews) {
      return allNews.find(p => p.title === id);
    } else {
      return null;
    }
  });

export const selectNewsError: MemoizedSelector<object, any> = createSelector(
  selectNewsState,
  getError
);

export const selectNewsIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectNewsState, getIsLoading);