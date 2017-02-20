import { Component, OnInit } from '@angular/core';
import {User} from "./User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[];
  constructor() {
    this.users =[{
      name: 'Jeanette S.',
      age: 32,
      birthday: "02.02.1984",
      education: 'EASV'
    },
      {
        name: "Stefan T.",
        age: 32,
        birthday: "03.03.1985",
        education: 'EASV'
      }];
  }

  ngOnInit() {

  }

}
