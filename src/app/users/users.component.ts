import { Component, OnInit } from '@angular/core';
import {User} from "./User";
import {UsersService} from "./users.service";

@Component({
  selector: 'ih-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  userName: string;
  iconName:string;
  users: User[];
  constructor(private userService : UsersService) {
    this.users = userService.getUsers();
  }

  ngOnInit() {

  }

}
