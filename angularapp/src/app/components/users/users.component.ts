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
  enabledAdd: boolean;
  currentClasses?: {};

  constructor() {
      // use to inject dependencies
  }

  ngOnInit(): void {
      this.enabledAdd = true;
      this.showExtended = true;
      this.loaded = false;
      setTimeout(() => {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Brady',
                age: 30,
                gender: "male",
                isActive: true
            },
            {
                firstName: 'Kevin',
                lastName: 'James',
                age: 24,
                gender: "male",
                image: "http://lorempixel.com/200/200/people/3",
                isActive: true
            },
            {
                firstName: 'Bruce',
                lastName: 'Lee',
                gender: "male",
                isActive: false
            },
            {
                firstName: 'Bryan',
                lastName: 'Müller',
                age: 17,
                gender: "male",
                image: "http://lorempixel.com/200/200/people/1",
                isActive: true    
            }
        ];
        this.loaded = true;
        this.setCurrentClasses();
      }, 1337);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
      this.currentClasses = {
          'btn-success': this.enabledAdd,
          'big-text': this.showExtended
      }
  }
}
