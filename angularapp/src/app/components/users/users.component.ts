import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../serivces/data.service';

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

    constructor(private _dataService: DataService) {
        // use to inject dependencies
        this.resetUser();
    }

    ngOnInit(): void {
        this.enabledAdd = true;
        this.loaded = false;
        this.showUserForm = false;
        setTimeout(() => {
            this.users = this._dataService.loadUsers();
            this.setCurrentClasses();
            this.loaded = true;
        }, 1337);
    }

    resetUser() {
        this.user = {
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
    onSubmit({ value, valid }: { value: User, valid: boolean }) {
        if (valid) {
            this.users.unshift(value);
            this.form.reset();
        }
    }
}
