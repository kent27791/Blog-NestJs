import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/main/shared/models/article.model';
import { MainState, selectMain  } from '../shared/store/main.state';
import { AppState } from 'src/app/app.state';
import { StoreFeature } from '@ngrx/store/src/models';
import * as Actions from '../shared/store/actions/article.action';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  articles: Observable<Article[]>;
  constructor(
    private store: Store<AppState>,
    private homeService: HomeService
  ) {
    this.articles = store.select(i => i.main.article);
  }

  ngOnInit() {
    this.init();
    this.bind();
  }

  init() {
    this.homeService.getArticlesForHomePage().subscribe((res: any) => {
      const articles = res.result.items as Article[];
      this.store.dispatch(new Actions.GetArticle(articles));
    });
  }

  bind() {
    this.articles.subscribe(r => {
      console.log(r);
    });
  }
}
