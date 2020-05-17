import { BaseService } from 'src/app/shared/services/base.service';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService extends BaseService {
  constructor(private injector: Injector) {
    super('article', injector);
  }

  getArticlesForHomePage() {
    return this.post('', {}, {});
  }
}
