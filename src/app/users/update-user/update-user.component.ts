import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'fap-update-user',
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {

  user: User;
  constructor(private userService : UsersService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.userService.getUser(params['id']); // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }

 updateUser(user: User){
    this.userService.updateUser(user);
 }
}
