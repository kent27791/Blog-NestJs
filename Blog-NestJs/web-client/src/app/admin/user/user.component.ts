import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  users = [];
  currentUser = null;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  getUserDetails(id: number) {
    this.userService.getUserDetails(id).subscribe((user: any) => {
      this.currentUser = user;
    });
  }

}
