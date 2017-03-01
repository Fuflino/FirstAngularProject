import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../users/user";

@Component({
  selector: 'fap-create-userview',
  templateUrl: 'create-userview.component.html',
  styleUrls: ['create-userview.component.css']
})
export class CreateUserviewComponent implements OnInit {


  user: User;

  @Output()
  tryCreateEmitter = new EventEmitter();

  tryCreate(){
    console.log("tryCreate")
    this.tryCreateEmitter.emit(this.user);}

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }


}
