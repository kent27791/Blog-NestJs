import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers() {
    return this.httpClient.get('http://localhost:3000/user');
  }

  getUserDetails(id: number) {
    return this.httpClient.get(`http://localhost:3000/user/${id}`);
  }
}
