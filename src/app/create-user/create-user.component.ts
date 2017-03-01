import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users/users.service";

@Component({
  selector: 'fap-create-user',
  templateUrl: './create-user.component.html'
})
export class CreateUserComponent implements OnInit {


  constructor(private userService: UsersService) {
  }

  ngOnInit() {
  }

  createUser(user){
    console.log("createUser");
  this.userService.addUser(user);
  }
}
