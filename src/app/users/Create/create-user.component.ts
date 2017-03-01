import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'fap-create-user',
  templateUrl: 'create-user.component.html'
})
export class CreateUserComponent implements OnInit {


  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
  }

  createUser(user){
    console.log("createUser");
  this.userService.addUser(user);
  this.router.navigate(['/users']);

  }
}
