import {Injectable, OnInit} from '@angular/core';
import {User} from "./user";

@Injectable()
export class UsersService{

  private _users: User[];

  constructor() {
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

  deleteUser(user : User){
   this._users.filter(x => x.id === user.id).pop();
  }

  updateUser(user : User){
    this._users.filter(x => x.id === user.id).pop();
    this._users.push(user);
  }

  getUser(id: string) : User{
    return this._users.filter(x => x.id === id)[0];
  }

}
