import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'fap-login-views',
  templateUrl: 'login-views.component.html',
  styleUrls: ['login-views.component.css']
})
export class LoginViewsComponent implements OnInit {

  @Input()
  user:any;

  @Input()
  signInError: string;

  @Input()
  tryToLogin: boolean;

  @Output()
  tryLoginEmitter = new EventEmitter();

  tryLogin(){
    this.tryLoginEmitter.emit(this.user);
  }

  constructor() {
    this.user = {};
  }

  ngOnInit() {
  }

}
