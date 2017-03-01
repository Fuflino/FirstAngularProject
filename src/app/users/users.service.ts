import {Injectable, OnInit} from '@angular/core';
import {User} from "./user";

@Injectable()
export class UsersService implements OnInit{

  private _users: User[];

  constructor() {

  }

  ngOnInit(){
    this._users = [{
      id: 'en',
      name: 'Jeanette S.',
      age: 32,
      birthday: "02.02.1984",
      education: 'EASV'
    },
      {
        id:'to',
        name: "Stefan T.",
        age: 32,
        birthday: "03.03.1985",
        education: 'EASV'
      }];
  }

  getUsers() : User[]{
    return this._users;
  }

   addUser(user: User) {
    console.log("addUser: ", user);
    this._users.push(user);
  }

  deleteUser(id : string){
   this._users.filter(x => x.id === id).pop();
  }

  updateUser(user : User){
    this._users.filter(x => x.id === user.id).pop();
    this._users.push(user);
  }

}