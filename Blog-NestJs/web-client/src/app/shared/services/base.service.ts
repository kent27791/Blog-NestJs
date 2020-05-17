import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable, Inject, Injector } from '@angular/core';
import { of } from 'rxjs';

export class BaseService {
  private httpClient;
  private hostUri: string = environment.hostUri;
  private serviceUri;
  constructor(serviceUri: string, injector: Injector) {
    this.serviceUri = `${this.hostUri}/${serviceUri}`;
    this.httpClient = injector.get(HttpClient);
  }

  get(url: string, options?: {}) {
    return this.httpClient.get(`${this.serviceUri}/${url}`, options);
  }

  post(url: string, body?: {}, options?: {}) {
    return this.httpClient.post(`${this.serviceUri}/${url}`, body, options);
  }

  put(url: string, body?: {}, options?: {}) {
    return this.httpClient.put(`${this.serviceUri}/${url}`, body, options);
  }

  delete(url: string, options?: {}) {
    return this.httpClient.delete(`${this.serviceUri}/${url}`, options);
  }
}
