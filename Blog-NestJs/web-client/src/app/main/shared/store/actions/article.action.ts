import { Action } from '@ngrx/store';
import { Article } from '../../models/article.model';

export const GET_ARTICLE = '[ARTICLE] Get Article';
export const ADD_ARTICLE = '[ARTICLE] Add Article';
export const REMOVE_ARTICLE = '[ARTICLE] Remove Article';

export class GetArticle implements Action {
  readonly type = GET_ARTICLE;
  constructor(public payload: Article[]) {}
}

export class AddArticle implements Action {
  readonly type = ADD_ARTICLE;
  constructor(public payload: Article) {}
}

export class RemoveArticle implements Action {
  readonly type = REMOVE_ARTICLE;
  constructor(public payload: number) {}
}

export type Actions = AddArticle | RemoveArticle | GetArticle;
