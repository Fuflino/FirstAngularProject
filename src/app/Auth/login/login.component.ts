import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';
import {AuthService} from "../auth.service";
import {Subscription} from "rxjs";



@Component({
  selector: 'fap-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginError:string;
  request: Subscription;
  tryLogin: boolean;

  constructor(public loginValidationBar : MdSnackBar, private router : Router,
              private authService: AuthService) {

  }

  login(user){
    this.tryLogin = true;
    if (this.request){
      this.request.unsubscribe();
    }
        this.request = this.authService
        .login(user.name, user.education).delay(3000)
        .subscribe((lUser) => {
          if(lUser) {
            this.loginError = null;
            this.router.navigate(['/']).then(() => {
              this.loginValidationBar.open("You are logged in", "OK", {
                duration: 4000,
              });
            });

          }
          else {
            this.loginError = "incorrect username or password";
          }
          this.router.navigate(["/users"]);
          this.tryLogin = false;
        })

    }

  ngOnInit() {
  }

}
