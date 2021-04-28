import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { News } from '../../core/models';

export const featureAdapter: EntityAdapter<
  News
> = createEntityAdapter<News>({
  selectId: model => model.title,
  sortComparer: (a: News, b: News): number =>
    b.title.localeCompare(a.title)
});

export interface State extends EntityState<News> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);