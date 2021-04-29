import { NewsStoreState } from './news-store';
import { NewsEverythingStoreState } from './news-everything-store';

export interface State {
  news: NewsStoreState.State;
  newsEverything: NewsEverythingStoreState.State;
}