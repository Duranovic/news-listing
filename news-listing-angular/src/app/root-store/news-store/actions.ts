import { Action } from '@ngrx/store';
import { News } from 'src/app/core/models/news';

export enum ActionTypes {
  LOAD_REQUEST = '[News] Load Request',
  LOAD_FAILURE = '[News] Load Failure',
  LOAD_SUCCESS = '[News] Load Success'
}

export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: News[] }) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;