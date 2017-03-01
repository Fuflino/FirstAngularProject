import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'fap-update-userview',
  templateUrl: 'update-userview.component.html',
  styleUrls: ['update-userview.component.css']
})
export class UpdateUserviewComponent implements OnInit {

  @Input()
  inputUser : User;

  @Output()
  tryUpdateEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  tryUpdate(){
    this.tryUpdateEmitter.emit(this.inputUser);
  }

}
