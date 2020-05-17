import { Action } from '@ngrx/store';
import { Article } from '../../models/article.model';
import * as ArticleActions from '../actions/article.action';

export function reducer(state: Article[] = [], action: ArticleActions.Actions) {
  switch (action.type) {
    case ArticleActions.GET_ARTICLE: {
      state = action.payload;
      return state;
    }
    case ArticleActions.ADD_ARTICLE: {
      return [...state, action.payload];
    }
    case ArticleActions.REMOVE_ARTICLE: {
      return state.splice(action.payload, 1);
    }
    default: {
      return state;
    }
  }
}
