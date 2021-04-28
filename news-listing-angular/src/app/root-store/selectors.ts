import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  NewsStoreSelectors
} from './news-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  NewsStoreSelectors.selectNewsError,
  (newsError: string) => {
    return newsError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  NewsStoreSelectors.selectNewsIsLoading,
  (news: boolean) => {
    return news;
  }
);