import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  loaded: boolean;
  enabledAdd: boolean;
  currentClasses?: {};

  constructor() {
      // use to inject dependencies
  }

  ngOnInit(): void {
      this.enabledAdd = true;
      this.loaded = false;
      setTimeout(() => {
        this.users = [
            {
                firstName: 'John',
                lastName: 'Brady',
                age: 30,
                gender: "male",
                isActive: true,
                image: "https://randomuser.me/api/portraits/men/78.jpg",
                balance: 910,
                registered: new Date("03-04-2003"),
                showExtended: false
            },
            {
                firstName: 'Kevin',
                lastName: 'James',
                age: 24,
                gender: "male",
                image: "https://randomuser.me/api/portraits/women/32.jpg",
                isActive: true,
                balance: 4016,
                registered: new Date("09/08/1998"),
                showExtended: false
            },
            {
                firstName: 'Bruce',
                lastName: 'Lee',
                gender: "male",
                isActive: false,
                image: "https://randomuser.me/api/portraits/men/23.jpg",
                balance: 103087,
                registered: new Date("07/14/1974"),
                showExtended: false
            },
            {
                firstName: 'Bryan',
                lastName: 'Müller',
                age: 17,
                gender: "male",
                image: "https://randomuser.me/api/portraits/men/70.jpg",
                isActive: true,
                balance: 51,
                registered: new Date("01/01/2017"),
                showExtended: false
            }
        ];
        this.setCurrentClasses();
        this.loaded = true;
      }, 1337);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  toggleExtend(user: User) {
    user.showExtended = !user.showExtended;
  }

    setCurrentClasses() {
        this.currentClasses = {
            'btn-success': this.enabledAdd
        }
    }
    currentStyles(user: User) {
        return {
            'padding-top': user.showExtended ? '0' : '32px',
            'font-size': user.showExtended ? '' : '40px'
        }
    }
}
