import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class DataService {

  constructor() { }

  loadUsers() : User[] {
    // setTimeout(() => {
      return [
        {
            firstName: 'John',
            lastName: 'Brady',
            email: 'john@gmail.com',
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
            email: 'kevin@gmail.com',
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
            email: 'bruce@gmail.com',
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
            email: 'bryanm@gmail.com',
            age: 17,
            gender: "male",
            image: "https://randomuser.me/api/portraits/men/70.jpg",
            isActive: true,
            balance: 51,
            registered: new Date("01/01/2017"),
            showExtended: false
        }
    ];
    // }, 1337);
  }
}
