import { Component, OnInit } from "@angular/core"
import { User } from "../../models/User";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // styles: [`
    // h2 {
    //     color: blue
    // }`]
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {
        // use to inject dependencies
        this.sayHello();
    }

    ngOnInit(): void {
        this.user = {
            firstName: 'John',
            lastName: 'Brady',
            age: 30
        };
    }

    sayHello() {
        console.log(`Hello ${this.user.firstName}`);
    }

    showAge() {
        return this.user.age;
    }
}
