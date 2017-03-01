import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {UsersService} from "../../users/users.service";
import {User} from "../../users/user";

@Component({
  selector: 'fap-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginError:string;
  users: User[];
  constructor(public loginValidationBar : MdSnackBar, private router : Router, private userService: UsersService) {
    this.users = userService.getUsers();
  }

  login(user){
    console.log('user', user);
    let userAccepted = this.users
      .filter(x => x.name === user.name)
      .filter(y => y.education === user.education);
    if(userAccepted && userAccepted.length === 1) {
      this.loginError = null;
      this.router.navigate(['/']).then(() => {
        this.loginValidationBar.open("You are logged in", "OK", {
          duration: 4000,
        });
      });
    } else {
      this.loginError = "incorrect username or password";
    }

  }
  ngOnInit() {
  }

}
