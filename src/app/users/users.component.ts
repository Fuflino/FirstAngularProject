import {Component, OnInit} from '@angular/core';
import {User} from "./User";
import {UsersService} from "./users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ih-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  userName: string;
  iconName:string;
  users: User[];

  constructor(private userService : UsersService, private router: Router) {
    this.users = userService.getUsers();

  }

  ngOnInit() {

  }

  updateUser(user : User){
    this.router.navigate(['/users/' + user.id])
  }
}
