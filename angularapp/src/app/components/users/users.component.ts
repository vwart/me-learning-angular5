import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean;
  loaded: boolean;

  constructor() {
      // use to inject dependencies
  }

  ngOnInit(): void {
      this.showExtended = true;
      this.loaded = false;
      setTimeout(() => {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Brady',
                age: 30,
                gender: "male"
            },
            {
                firstName: 'Kevin',
                lastName: 'James',
                age: 24,
                gender: "male"
            },
            {
                firstName: 'Bruce',
                lastName: 'Lee',
                gender: "male"
            },
            {
                firstName: 'Bryan',
                lastName: 'Müller',
                age: 17,
                gender: "male"
            }
        ];
        this.loaded = true;
      }, 1337);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
