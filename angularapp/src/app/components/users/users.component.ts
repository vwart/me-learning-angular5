import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    user: User;
    users: User[];
    loaded: boolean;
    enabledAdd: boolean;
    showUserForm: boolean;
    currentClasses?: {};

    @ViewChild('userForm') form: any;

    constructor() {
        // use to inject dependencies
        this.resetUser();
    }

    ngOnInit(): void {
        this.enabledAdd = true;
        this.loaded = false;
        this.showUserForm = false;
        setTimeout(() => {
            this.users = [
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
            this.setCurrentClasses();
            this.loaded = true;
        }, 1337);
    }

    resetUser() {
        this.user  = {
            firstName: '',
            lastName: '',
            email: '',
            isActive: true,
            registered: new Date
        };
    }

    addUser() {
        this.users.unshift(this.user);
        this.resetUser();
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
    onSubmit({value, valid} : {value: User, valid: boolean}) {
        if (valid) {
            this.users.unshift(value);
            this.form.reset();
        }
    }
}
