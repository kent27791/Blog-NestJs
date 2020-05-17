import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Article } from '../../shared/models/article.model';
import { AppState } from '../../../app.state';

export interface MainState {
  article: Article[];
}

export const selectMain = createFeatureSelector<AppState, MainState>('main');
