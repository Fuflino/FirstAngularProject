import { Injectable } from '@angular/core';
import {User} from "../users/user";
import {Router} from "@angular/router";
import {UsersService} from "../users/users.service";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  users: User[];
  constructor(private router : Router, private userService: UsersService) {
    this.users = userService.getUsers();
  }

  login(username, password) : Observable<User>{
    let userAccepted = this.users
      .filter(x => x.name === username)
      .filter(y => y.education === password);
    if(userAccepted && userAccepted.length === 1) {
      return Observable.of(userAccepted[0]);
      }
     else {
      return Observable.of(null);
    }

  }

}
